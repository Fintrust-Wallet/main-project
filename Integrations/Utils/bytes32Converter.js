import ethers from "ethers";

function convertStringToBytes32(url) {
  return ethers.utils.formatBytes32String(url);
}

function convertBytes32ToString(bytes32) {
  return ethers.utils.parseBytes32String(bytes32);
}

export { convertBytes32ToString, convertStringToBytes32 };
