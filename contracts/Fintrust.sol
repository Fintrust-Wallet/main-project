// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../node_modules/@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "../node_modules/@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "../node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract Fintrust is
    Initializable,
    PausableUpgradeable,
    AccessControlUpgradeable
{
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant SIGNER_ROLE = keccak256("SIGNER_ROLE");

    using Counters for Counters.Counter;

    Counters.Counter private _campaignIdCounter;
    uint256 constant MIN_AMOUNT = 500;

    enum State {
        Deposit,
        TargetReached,
        Voting,
        Withdrawal,
        Ended
    }

    error InvalidAmount(uint256 amount);
    error InactiveCampaign(uint256 campaignId);
    error Unauthorized(address sender);
    error TargetReached(uint256 campaignId);

    event CampaignCreated(uint256 indexed id, address indexed initiator);
    event Deposit(uint256 indexed id, address indexed depositor);
    event CampaignEnded(uint256 indexed id, uint256 indexed timeStamp);

    modifier onlyEOA() {
        require(msg.sender == tx.origin, "Must use EOA");
        _;
    }

    struct Campaign {
        bool isActive;
        bool withdrawInitiated;
        uint8 confirmations;
        State state;
        address initiator;
        uint128 startTimeStamp;
        uint128 endTimeStamp;
        uint256 id;
        bytes32 url;
        uint256 amount;
        uint256 balance;
    }

    mapping(uint256 => Campaign) campaigns;

    //Keeps a record of signatories that have actually confirmed or rejected a campaign's withdrawal
    mapping(uint256 => address[]) campaignToSigner;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __Pausable_init();
        __AccessControl_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function createCampaign(bytes32 _url, uint256 _amount)
        external
        payable
        onlyEOA
    {
        //check the value of url is not 0x00 or default bytes32
        if (_amount < MIN_AMOUNT) {
            revert InvalidAmount(_amount);
        }

        _campaignIdCounter.increment();
        uint256 currentId = _campaignIdCounter.current();

        campaigns[currentId] = Campaign({
            id: currentId,
            url: _url,
            amount: _amount,
            initiator: msg.sender,
            startTimeStamp: uint128(block.timestamp),
            endTimeStamp: 0,
            isActive: true,
            balance: 0,
            withdrawInitiated: false,
            confirmations: 0,
            state: State.Deposit
        });

        emit CampaignCreated(currentId, msg.sender);
    }

    function deposit(uint256 _campaignId) external payable {
        Campaign storage _campaign = campaigns[_campaignId];

        if (_campaign.state != State.Deposit){
            revert("");
        }

        if (!_campaign.isActive) {
            revert InactiveCampaign(_campaignId);
        }

        if (_campaign.balance >= _campaign.amount) {
            _campaign.state = State.TargetReached;
            revert TargetReached(_campaignId);
        }

        emit Deposit(_campaignId, msg.sender);
        _campaign.balance += msg.value;
    }

    function getCampaign(uint256 _campaignId)
        external
        view
        returns (Campaign memory)
    {
        return campaigns[_campaignId];
    }

    function allCampaigns() external view returns (Campaign[] memory) {
        uint256 count = _campaignIdCounter.current();
        uint256 currentIndex = 0;

        Campaign[] memory items = new Campaign[](count);

        for (uint256 i = 1; i < count; i++) {
            Campaign memory currentCampaign = campaigns[i];
            items[currentIndex] = currentCampaign;
            currentIndex++;
        }

        return items;
    }

    function endCampaign(uint256 _campaignId) external {
        Campaign memory _campaign = campaigns[_campaignId];

        if (
            msg.sender != _campaign.initiator &&
            !hasRole(DEFAULT_ADMIN_ROLE, msg.sender)
        ) {
            revert Unauthorized(msg.sender);
        }

         if (_campaign.state != State.TargetReached){
            revert("");
        }

        if (!_campaign.isActive) {
            revert InactiveCampaign(_campaignId);
        }

        _campaign.isActive = false;
        _campaign.withdrawInitiated = true;
        _campaign.endTimeStamp = uint128(block.timestamp);
        _campaign.state = State.Voting;

        campaigns[_campaignId] = _campaign;

        emit CampaignEnded(_campaignId, block.timestamp);
    }

    function confirmWithdraw(uint256 _campaignId)
        external
        onlyRole(SIGNER_ROLE)
    {
        Campaign storage _campaign = authSigner(_campaignId);
        
        _campaign.confirmations += 1;
    }

    function rejectWithdraw(uint256 _campaignId)
        external
        onlyRole(SIGNER_ROLE)
    {
        authSigner(_campaignId);
    }

    function withdraw(uint256 _campaignId) external {
        Campaign storage _campaign = campaigns[_campaignId];

        if (msg.sender != _campaign.initiator) {
            revert Unauthorized(msg.sender);
        }

         if (_campaign.state != State.Withdrawal){
            revert("");
        }

        if (!_campaign.withdrawInitiated || _campaign.isActive) {
            revert("campaign not ended");
        }  

        uint _amount = _campaign.amount;
        _campaign.amount = 0;
        _campaign.state = State.Ended;


        if (_campaign.confirmations >= 3){
            (bool success,) = _campaign.initiator.call{value: _amount}("");
            require(success, "Error in Send");
        }        
    }

    function authSigner(uint256 _campaignId)
        internal
        returns (Campaign storage)
    {
        Campaign storage _campaign = campaigns[_campaignId];

        
         if (_campaign.state != State.Voting){
            revert("");
        }

        if (!_campaign.withdrawInitiated || _campaign.isActive) {
            revert("campaign not ended");
        }

        address[] memory signers = campaignToSigner[_campaignId];

        if (signers.length == 5) {
            revert("Voting completed");
        }

        for (uint256 i = 0; i < signers.length; i++) {
            if (signers[i] == msg.sender) {
                revert("Already voted");
            }
        }

        campaignToSigner[_campaignId][signers.length] = msg.sender;

        return _campaign;
    }
}
