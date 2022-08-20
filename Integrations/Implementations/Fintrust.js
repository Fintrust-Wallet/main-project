import { ethers } from "ethers";
import fintrust from "../Abi/fintrust.json";

let fintrustContractAddress = "0x91714f5d287851931fA2c2983bb475dfe0776032";

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

  const campaign = await transaction.wait();
  return campaign;
}

async function getAllCreatedCampaigns(creatorsAddress) {
  const contractInstance = await createFintrustContractInstance();

  const transaction = await contractInstance.allCampaigns(creatorsAddress);

  const campaign = await transaction.wait();
  return campaign;
}

async function getAllSignatoryCampaigns(signatoryAddress) {
  const contractInstance = await createFintrustContractInstance();

  const transaction = await contractInstance.allRef(signatoryAddress);

  const campaign = await transaction.wait();
  return campaign;
}

async function getAllWithdrawRequest(signatoryAddress) {
  const contractInstance = await createFintrustContractInstance();

  const transaction = await contractInstance.allWithdrawRequest(
    signatoryAddress
  );

  const campaign = await transaction.wait();
  return campaign;
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
};
