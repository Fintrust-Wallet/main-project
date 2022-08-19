import * as IPFS from "ipfs-core";
const ipfs = await IPFS.create();

export async function addFiles(arrayOfFiles) {
  const result = [];

  for await (const resultPart of ipfs.addAll(arrayOfFiles)) {
    result.push(resultPart);
  }
  return result;
}

export async function addAFile(file) {
  const { cid } = await ipfs.add(file);
  return `https://ipfs.io/ipfs/${cid}`;
}

export async function validateFormInput(obj){
    if (!obj.title || !obj.description || !obj.mediaFiles.length){
        return false;
    }

    return true;
}
