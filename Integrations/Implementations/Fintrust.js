import { ethers } from "ethers";
import fintrust from "../Abi/fintrust.json";

let fintrustContractAddress = "0x93BF57d7b817a0a05da8527FC1c10C4872ED5C47";

async function createDisputeContractInstance() {
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

async function createCampaign(urlAsBytes32, amount, arrayOfAddresses) {
  const contractInstance = await createDisputeContractInstance();

  let transaction = await contractInstance.createCampaign(
    urlAsBytes32,
    amount,
    arrayOfAddresses
  );
  transaction = await transaction.wait();

  return transaction.events[0];
}

async function deposit(creatorsAddress, campaignId, amount) {
  const contractInstance = await createDisputeContractInstance();

  let transaction = await contractInstance.deposit(
    creatorsAddress,
    campaignId,
    amount
  );
  transaction = await transaction.wait();

  return transaction.events[0];
}

async function requestWithdraw(campaignId) {
  const contractInstance = await createDisputeContractInstance();

  let transaction = await contractInstance.requestWithdraw(campaignId);
  transaction = await transaction.wait();

  return transaction.events[0];
}

async function confirmWithdraw(creatorsAddress, campaignId) {
  const contractInstance = await createDisputeContractInstance();

  let transaction = await contractInstance.confirmWithdraw(
    creatorsAddress,
    campaignId
  );
  transaction = await transaction.wait();

  return transaction.events[0];
}

async function rejectWithdraw(creatorsAddress, campaignId) {
  const contractInstance = await createDisputeContractInstance();

  let transaction = await contractInstance.rejectWithdraw(
    creatorsAddress,
    campaignId
  );
  transaction = await transaction.wait();

  return transaction.events[0];
}

async function withdraw(creatorsAddress, campaignId) {
  const contractInstance = await createDisputeContractInstance();

  let transaction = await contractInstance.withdraw(
    campaignId,
    creatorsAddress
  );
  transaction = await transaction.wait();

  return transaction.events[0];
}

async function getACampaign(creatorsAddress, campaignId) {
  const contractInstance = await createDisputeContractInstance();

  const transaction = await contractInstance.getCampaign(
    campaignId,
    creatorsAddress
  );

  const campaign = await transaction.wait();
  return campaign;
}

async function getAllCreatedCampaigns(creatorsAddress) {
  const contractInstance = await createDisputeContractInstance();

  const transaction = await contractInstance.allCampaigns(creatorsAddress);

  const campaign = await transaction.wait();
  return campaign;
}

async function getAllSignatoryCampaigns(signatoryAddress) {
  const contractInstance = await createDisputeContractInstance();

  const transaction = await contractInstance.allRef(signatoryAddress);

  const campaign = await transaction.wait();
  return campaign;
}

async function getAllWithdrawRequest(signatoryAddress) {
  const contractInstance = await createDisputeContractInstance();

  const transaction = await contractInstance.allWithdrawRequest(
    signatoryAddress
  );

  const campaign = await transaction.wait();
  return campaign;
}

export {
  createCampaign,
  deposit,
  rejectWithdraw,
  requestWithdraw,
  confirmWithdraw,
  withdraw,
  getACampaign,
  getAllCreatedCampaigns,
  getAllSignatoryCampaigns,
  getAllWithdrawRequest,
};
