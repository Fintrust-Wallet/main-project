import Image from "next/image";
import React from "react";
import "../../../../public/images";
import {
  Exoduslogo,
  MetaMaskIcon,
  salfal,
  trust,
  walletConnect,
} from "../../../../public/images";
import styles from "./style.module.css";
import crypto from "crypto";
const SupportedWalletBanner = () => {
  const supportedWallets = [
    MetaMaskIcon,
    trust,
    walletConnect,
    Exoduslogo,
    salfal,
  ].map((item, i) => (
    <div key={crypto.randomBytes(7).toString("hex")} className={styles.box}>
      <Image src={item} />
    </div>
  ));
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>{supportedWallets}</div>
    </div>
  );
};

export { SupportedWalletBanner };
