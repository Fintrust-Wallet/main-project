import Image from "next/image";
import React from "react";
import "../../../images";
import {
  Exoduslogo,
  MetaMaskIcon,
  salfal,
  trust,
  walletConnect,
} from "../../../images";
import styles from "./style.module.css";
const SupportedWalletBanner = () => {
  const supportedWallets = [
    MetaMaskIcon,
    trust,
    walletConnect,
    Exoduslogo,
    salfal,
  ].map((item, i) => (
    <div className={styles.box}>
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
