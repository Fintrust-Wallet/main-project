import { Web3Storage } from "web3.storage";
require("dotenv").config()

function getAccessToken () {   
    return `${process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN}`;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export async function storeFiles(files) {
  const client = makeStorageClient();
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}

export async function retrieveFiles(cid) {
  const client = makeStorageClient();
  const res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    return (false, null);
  }

  // unpack File objects from the response
  const files = await res.files();
  return (true, files) 
}