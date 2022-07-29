import React from "react";
import styles from "./style.module.css";
const SupportedWalletBanner = () => {
  const supportedWallets = Array(9)
    .fill("Wallet")
    .map((_, i) => <div className={styles.box}>{_}</div>);
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>{supportedWallets}</div>
    </div>
  );
};

export { SupportedWalletBanner };
