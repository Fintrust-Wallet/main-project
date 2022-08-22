import crypto from "crypto";
const getRandomKey = () => {
  crypto.randomBytes(7).toString("hex");
};

export { getRandomKey };
