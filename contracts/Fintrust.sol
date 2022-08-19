// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.9;

// import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
// import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
// import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

// contract Fintrust is
//     Initializable,
//     PausableUpgradeable,
//     AccessControlUpgradeable
// {
//     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
//     bytes32 public constant SIGNER_ROLE = keccak256("SIGNER_ROLE");

//     using Counters for Counters.Counter;

//     Counters.Counter private _campaignIdCounter;
//     uint256 constant MIN_AMOUNT = 500;

//     enum State {
//         Inactive,
//         Active,
//         TargetReached,        
//         Ended
//     }

//     error InvalidAmount(uint256 amount);
//     error InactiveCampaign(uint256 campaignId);
//     error Unauthorized(address sender);
//     error TargetReached(uint256 campaignId);
//     error InvalidState(uint campaignId, address creator);

//     event CampaignCreated(uint256 indexed id, address indexed initiator);
//     event Deposit(uint256 indexed id, address indexed creator, address indexed depositor);
//     event SignerConfirmed(uint256 indexed id, address indexed creator, address indexed sender);
//     event SignerRejected(uint256 indexed id, address indexed creator, address indexed sender);
//     event CampaignEnded(uint256 indexed id, uint256 indexed timeStamp);


//     modifier onlyEOA() {
//         require(isNotContract(msg.sender), "Must use EOA");
//         _;
//     }    

//     struct Campaign {
//         bool isActive;
//         bool withdrawInitiated;
//         uint8 confirmations;
//         uint8 signatoriesCount;        
//         State state;        
//         address initiator;
//         uint128 startTimeStamp;
//         uint128 endTimeStamp; 
//         bytes32 url;       
//         uint256 id;        
//         uint256 amount;
//         uint256 balance;
//         uint256 deposited;
//         address[] signatories;        
//     }

//     struct CampaignRef {        
//         address initiator;
//         bool hasVoted;
//         bool withdrawInitiated;
//         uint id; 
//         bytes32 url;
//     }       

//     mapping(address => Campaign[]) creators;
//     mapping(address => CampaignRef[]) signatories;

//     /// @custom:oz-upgrades-unsafe-allow constructor
//     constructor() {
//         _disableInitializers();
//     }

//     function initialize() public initializer {
//         __Pausable_init();
//         __AccessControl_init();

//         _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
//         _grantRole(PAUSER_ROLE, msg.sender);
//     }

//     function pause() public onlyRole(PAUSER_ROLE) {
//         _pause();
//     }

//     function unpause() public onlyRole(PAUSER_ROLE) {
//         _unpause();
//     }

//     function createCampaign(bytes32 _url, uint256 _amount, address[] calldata _signatories)
//         external
//         payable
//         onlyEOA
//     {
//         //VALIDATIONS

//         //check the value of url is not 0x00 or default bytes32
//         if (_amount < MIN_AMOUNT) {
//             revert InvalidAmount(_amount);
//         }

//         if (_signatories.length < 3 || _signatories.length > 250){
//             revert("Invalid signatory count");
//         }
        
//         //get the current count of his campaigns created
//         Campaign[] storage _signersCampaigns = creators[msg.sender];
//         uint8 length = uint8(_signersCampaigns.length);

//         address[] memory _signers;

//         //create a new campaign
//         Campaign memory _campaign =  Campaign({            
//                 url: _url,
//                 amount: _amount,
//                 initiator: msg.sender,
//                 startTimeStamp: uint128(block.timestamp),
//                 endTimeStamp: 0,
//                 isActive: true,
//                 balance: 0,
//                 deposited: 0,
//                 withdrawInitiated: false,
//                 confirmations: 0,
//                 state: State.Active,
//                 id: length,
//                 signatories: _signers,
//                 signatoriesCount : length
//             });

//         //use current count as index to push to the his camapign arrays
//         _signersCampaigns[length] = _campaign;

//         //next for every signatory inside the signatory verify that they are not smart contracts
//         address[] memory signers = _signatories;

//         for (uint i = 0; i < signers.length ; i++){
//             address signer = signers[i];

//             //verify caller is not part of the signatories
//             if (signer == msg.sender){
//                 revert();
//             }

//             if (!isNotContract(signer)){
//                 revert();
//             }

//             CampaignRef memory _campaignRef = CampaignRef (
//                 {initiator: _campaign.initiator,
//                  id : _campaign.id,
//                  url : _campaign.url,
//                  hasVoted : false,
//                  withdrawInitiated: false
//                  });

//             CampaignRef[] storage _campaigns = signatories[signer];
//             _campaigns[_campaigns.length] = _campaignRef;
//         }         

//         emit CampaignCreated(length, msg.sender);
//     }

//     function deposit(address creator, uint256 _campaignId, uint amount) external payable {

//         if (msg.value != amount){
//             revert ();
//         }

//         Campaign[] storage _campaigns = creators[creator];
//         Campaign memory _campaign = _campaigns[_campaignId];

//         if (_campaign.state != State.Active){
//             revert("");
//         }

//         if (!_campaign.isActive) {
//             revert InactiveCampaign(_campaignId);
//         }

//         if (_campaign.deposited >= _campaign.amount) {
//             _campaign.state = State.TargetReached;
//             revert TargetReached(_campaignId);
//         }

//         emit Deposit(_campaignId, _campaign.initiator, msg.sender);

//         _campaign.balance += msg.value;
//         _campaign.deposited += msg.value;
//         _campaigns[_campaignId] = _campaign;
//     }

//     function confirmWithdraw(address creator, uint256 _campaignId)
//         external
//         onlyRole(SIGNER_ROLE)
//     {
//         Campaign storage _campaign = authSigner(creator, _campaignId);
//         emit SignerConfirmed(_campaignId, _campaign.initiator, msg.sender);
//         _campaign.confirmations += 1;
//     }

//     function rejectWithdraw(address creator, uint256 _campaignId)
//         external
//         onlyRole(SIGNER_ROLE)
//     {
//         Campaign storage _campaign = authSigner(creator, _campaignId);
//         emit SignerRejected(_campaignId, _campaign.initiator, msg.sender);
//     }

//     function requestWithdraw (uint256 _campaignId) external {
//         Campaign[] storage _signersCampaigns = creators[msg.sender];
//         Campaign storage _campaign = _signersCampaigns[_campaignId];

//         if (_campaign.state != State.Active){
//             revert("");
//         }

//         if (_campaign.withdrawInitiated){
//             revert("Already requested");
//         }

//         _campaign.withdrawInitiated = true;
//     }

//     function withdraw(uint256 _campaignId, uint amount) external {
//         Campaign[] storage _signersCampaigns = creators[msg.sender];
//         Campaign memory _campaign = _signersCampaigns[_campaignId];

//         if (msg.sender != _campaign.initiator) {
//             revert Unauthorized(msg.sender);
//         }

//         if (_campaign.state != State.Active && _campaign.state != State.TargetReached){
//             revert InvalidState(_campaignId, msg.sender);
//         }

//         if (!_campaign.withdrawInitiated) {
//             revert("campaign withdraw not requested");
//         }

//         if (_campaign.confirmations != _campaign.signatoriesCount){
//             revert Unauthorized(msg.sender);
//         }

//         if (_campaign.balance < amount){
//             revert("Insufficient Funds");
//         }

//         _campaign.withdrawInitiated = false;
//         _campaign.confirmations = 0;

//         if (_campaign.state == State.TargetReached){
//             if (_campaign.balance - amount == 0){
//                 _campaign.state = State.Ended;
//             }
//         }
       
//         _campaign.balance -= amount ;
//         _campaign.state = State.Ended;

//         _signersCampaigns[_campaignId] = _campaign;

//         (bool success,) = _campaign.initiator.call{value: amount}("");

//         require(success, "Error in Send");               
//     }

//     function authSigner (address creator, uint _campaignId) internal returns (Campaign storage){
//         Campaign[] storage _campaigns = creators[creator];
//         Campaign storage _campaign = _campaigns[_campaignId];

//         if (_campaign.state != State.Active){
//             revert InvalidState(_campaignId, creator);
//         }

//         if (!_campaign.withdrawInitiated) {
//             revert("campaign withdraw not requested");
//         }

//         CampaignRef[] memory _campaignAssigned = signatories[msg.sender];

//         bool isAuthorized = false;
//         CampaignRef memory ref;
//         uint id;

//         for (uint i = 0; i < _campaignAssigned.length; i++){
//             if (_campaignAssigned[i].id == _campaign.id && _campaignAssigned[i].initiator == _campaign.initiator && _campaignAssigned[i].url == _campaign.url){
//                 isAuthorized = true;
//                 ref = _campaignAssigned[i];
//                 id = i;
//             }
//         }

//         if (!isAuthorized){
//             revert Unauthorized(msg.sender);
//         }

//         if (ref.hasVoted){
//             revert ();
//         }

//         ref.hasVoted = true;

//         signatories[msg.sender][id] = ref;
        
//         return _campaign;
//     }    

//     function isNotContract(address _a) private view returns (bool){
//         uint len;
//         assembly { 
//             len := extcodesize(_a)
//              }
//         if (len == 0){
//             return true;
//         }

//         return false;            
//     }

    
//     function getCampaign(uint256 _campaignId, address creator)
//         external
//         view
//         returns (Campaign memory)
//     {
//         return creators[creator][_campaignId];
//     }

//     function allCampaigns(address creator) external view returns (Campaign[] memory) {
//         return creators[creator];        
//     }

//     function allRef(address signatory) external view returns (CampaignRef[] memory){
//         return signatories[signatory];
//     }

//     function allWithdrawRequest(address signatory) external view returns (Campaign[] memory campaigns){
//         CampaignRef[] memory _campaignRefs = signatories[signatory];      
//         uint index = 0;

//         for (uint i = 0 ; i < _campaignRefs.length; i++){
//             address initiator = _campaignRefs[i].initiator;
//             uint id = _campaignRefs[i].id;

//             Campaign memory _campaign = creators[initiator][id];

//             if(_campaign.withdrawInitiated){
//                 campaigns[index] = _campaign;
//                 index += 1;
//             }
                        
//         }
//     }
// }
