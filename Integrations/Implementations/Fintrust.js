import { ethers } from "ethers";
import fintrust from "../Abi/fintrust.json";
import { retrieveFiles } from "../Utils/web3Storage";
import axios from "axios";

let fintrustContractAddress = "0x27cbD6FA5CC38F057e91151A90907AE0E3e30040";

async function createFintrustContractInstance() {
  const { ethereum } = window;

  //if none is found, it means that a user does not
  if (!ethereum) {
    return;
  }

  //Get wallet provider and signer
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  //contract initialization: create an instance of the contract
  return new ethers.Contract(fintrustContractAddress, fintrust.abi, signer);
}

async function createCampaign(cid, amount, arrayOfAddresses) {
  if (!cid || !amount || arrayOfAddresses.length == 0) {
    alert(`Invalid Input${cid} ${amount} ${arrayOfAddresses}`);
    return;
  }

  let areValidAddresses = false;

  try {
    arrayOfAddresses.forEach((element) => {
      ethers.utils.getAddress(element);
    });
    areValidAddresses = true;
  } catch (e) {
    console.log(e.message);
  }

  if (!areValidAddresses) {
    alert("Invalid Signatory account");
    return;
  }

  const contractInstance = await createFintrustContractInstance();

  let amountAsString = amount.toString();
  let _amount = ethers.utils.parseEther(amountAsString);

  const transaction = await contractInstance.createCampaign(
    cid,
    _amount,
    arrayOfAddresses
  );

  let waitedTransaction = await transaction.wait();
  console.log(waitedTransaction.logs);
  return waitedTransaction;
}

async function donate(creatorsAddress, campaignId, amount) {
  const contractInstance = await createFintrustContractInstance();

  let transaction = await contractInstance.deposit(
    creatorsAddress,
    campaignId,
    amount
  );
  transaction = await transaction.wait();

  return transaction.events[0];
}

async function requestWithdraw(campaignId) {
  const contractInstance = await createFintrustContractInstance();

  let transaction = await contractInstance.requestWithdraw(campaignId);
  transaction = await transaction.wait();

  return transaction.events[0];
}

async function confirmWithdraw(creatorsAddress, campaignId) {
  const contractInstance = await createFintrustContractInstance();

  let transaction = await contractInstance.confirmWithdraw(
    creatorsAddress,
    campaignId
  );
  transaction = await transaction.wait();

  return transaction.events[0];
}

async function rejectWithdraw(creatorsAddress, campaignId) {
  const contractInstance = await createFintrustContractInstance();

  let transaction = await contractInstance.rejectWithdraw(
    creatorsAddress,
    campaignId
  );
  transaction = await transaction.wait();

  return transaction.events[0];
}

async function withdraw(creatorsAddress, campaignId) {
  const contractInstance = await createFintrustContractInstance();

  let transaction = await contractInstance.withdraw(
    campaignId,
    creatorsAddress
  );
  transaction = await transaction.wait();

  return transaction.events[0];
}

async function getACampaign(creatorsAddress, campaignId) {
  const contractInstance = await createFintrustContractInstance();

  const transaction = await contractInstance.getCampaign(
    campaignId,
    creatorsAddress
  );

  return dataFormat(transaction);
}

async function getAllCreatedCampaigns(creatorsAddress) {
  const contractInstance = await createFintrustContractInstance();
  const transaction = await contractInstance.allCampaigns(creatorsAddress);

  let items = await Promise.all(
    transaction.map(async (campaign) => {
      let targetAmount = ethers.utils.formatUnits(
        campaign.amount.toString(),
        "ether"
      );
      let totalRaised = ethers.utils.formatUnits(
        campaign.deposited.toString(),
        "ether"
      );

      let item = {
        targetAmount,
        campaignId: campaign.id.toNumber(),
        requestedWithdraw: campaign.withdrawInitiated,
        withdrawApprovals: campaign.confirmations,
        creatorsAddress: campaign.initiator,
        totalRaised,
        url: campaign.url,
      };

      let files = await retrieveFiles(campaign.url);

      if (files.length > 0) {
        files.forEach(async (file, index) => {
          if (file.name.includes(".jpg") || file.name.includes(".png")) {
            item[`image${index}`] = `https://ipfs.io/ipfs/${file.cid}`;
          } else {
            const text = await axios.get(`https://${file.cid}.ipfs.w3s.link/`);
            item[file.name] = text.data;
          }
        });
      }
      return item;
    })
  );

  return items;
}

async function getAllSignatoryCampaigns(signatoryAddress) {
  const contractInstance = await createFintrustContractInstance();

  const transaction = await contractInstance.allRef(signatoryAddress);

  return transaction;
}

async function getAllWithdrawRequest(signatoryAddress) {
  const contractInstance = await createFintrustContractInstance();

  const transaction = await contractInstance.allWithdrawRequest(
    signatoryAddress
  );

  return transaction;
}
async function dataFormat(campaign) {
  let targetAmount = ethers.utils.formatUnits(
    campaign.amount.toString(),
    "ether"
  );
  let totalRaised = ethers.utils.formatUnits(
    campaign.deposited.toString(),
    "ether"
  );

  let item = {
    targetAmount,
    campaignId: campaign.id.toNumber(),
    requestedWithdraw: campaign.withdrawInitiated,
    withdrawApprovals: campaign.confirmations,
    creatorsAddress: campaign.initiator,
    totalRaised,
    url: campaign.url,
  };

  let files = await retrieveFiles(campaign.url);

  if (files.length > 0) {
    files.forEach(async (file, index) => {
      if (file.name.includes(".jpg") || file.name.includes(".png")) {
        item[`image${index}`] = `https://ipfs.io/ipfs/${file.cid}`;
      } else {
        const text = await axios.get(`https://${file.cid}.ipfs.w3s.link/`);
        item[file.name] = text.data;
      }
    });
  }
  return item;
}
async function getAllCampaigns() {
  const contractInstance = await createFintrustContractInstance();

  const transaction = await contractInstance.getAllCampaigns();
  let items = await Promise.all(
    transaction.map(async (campaign) => {
      dataFormat(campaign);
    })
  );

  return items;
}

export {
  createCampaign,
  donate,
  rejectWithdraw,
  requestWithdraw,
  confirmWithdraw,
  withdraw,
  getACampaign,
  getAllCreatedCampaigns,
  getAllSignatoryCampaigns,
  getAllWithdrawRequest,
  getAllCampaigns,
};
