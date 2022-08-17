// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract MyToken is Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _campaignIdCounter;
    uint constant MIN_AMOUNT = 500;

    enum State {initial}

    error InvalidAmount(uint amount);
    error InactiveCampaign(uint campaignId);
    error Unauthorized(address sender);

    event CampaignCreated(uint indexed Id, address indexed initiator);

    modifier onlyEOA() {
    require(msg.sender == tx.origin, "Must use EOA");
    _;    
}

    struct Campaign {
        bool isActive; 
        address initiator; 
        uint128 startTimeStamp; 
        uint128 endTimeStamp; 
        uint id; 
        bytes32 url; 
        uint amount; 
        uint balance;
    }

    mapping (uint => Campaign) campaigns;

    constructor() {}    

    function createCampaign (bytes32 _url, uint _amount) external payable onlyEOA {

        //check the value of url is not 0x00 or default bytes32
        if (_amount < MIN_AMOUNT){
            revert InvalidAmount(_amount);
        }

        _campaignIdCounter.increment();
        uint currentId = _campaignIdCounter.current();

        campaigns[currentId] = Campaign(
            {
                id : currentId,
                url : _url,
                amount : _amount,
                initiator : msg.sender,
                startTimeStamp : uint128(block.timestamp),
                endTimeStamp : 0,
                isActive : true,
                balance: 0
            }
        );

        emit CampaignCreated (currentId, msg.sender);
    }

    function deposit (uint _campaignId) external payable {
        Campaign storage _campaign = campaigns[_campaignId];

        if (!_campaign.isActive){
            revert InactiveCampaign(_campaignId);
        }

        _campaign.balance += msg.value;

        if (_campaign.balance >= _campaign.amount){
            _campaign.isActive = false;
        }        
    }

    function getCampaign (uint _campaignId) external view returns (Campaign memory) {
        return campaigns[_campaignId];
    } 

    function allCampaigns () external view returns (Campaign[] memory){
        uint count = _campaignIdCounter.current();
        uint currentIndex = 0;

        Campaign[] memory items = new Campaign[](count);

        for(uint i = 1; i < count; i++){
            Campaign memory currentCampaign = campaigns[i];
            items[currentIndex] = currentCampaign;
            currentIndex++;
        }

        return items;
    }

    function endCampaign (uint _campaignId) external {

        Campaign storage _campaign = campaigns[_campaignId];

        if(msg.sender != _campaign.initiator && msg.sender != owner()){
            revert Unauthorized(msg.sender); 
        }

        if (!_campaign.isActive){
            revert InactiveCampaign(_campaignId);
        }

        _campaign.isActive = false;  
    }
}