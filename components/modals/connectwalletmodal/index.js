import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./connectWalletModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import {
  MetaMaskEmblem,
  trustIcon,
  walletConnectIcon,
} from "../../../public/images";
import Image from "next/image";
const ConnectWallet = ({ open, onClose, onConnect }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  if (isBrowser) {
    return ReactDOM.createPortal(
      <div className={open ? styles.active : styles.connectWalletModal}>
        <div className={open ? styles.open : styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Connect Wallet</h2>
              <button className={styles.close} onClick={() => onClose()}>
                <AiOutlineClose size={25} />
              </button>
            </div>
            <p className={styles.modalBodyParagraph}>
              Select the your preferred wallet below.
            </p>
            <div className={styles.modalBody}>
              {[
                {
                  name: "Metamask",
                  icon: MetaMaskEmblem,
                },
                {
                  name: "Trust Wallet",
                  icon: trustIcon,
                },
                {
                  name: "Walletconnect",
                  icon: walletConnectIcon,
                },
              ].map((_, index) => (
                <div
                  className={styles.wallet}
                  key={index}
                  onClick={() => {
                    onConnect(_.name);
                    onClose();
                  }}
                >
                  <div className={styles.walletIcon}>
                    <Image src={_.icon} alt={_.name} />
                  </div>
                  <div className={styles.walletName}>
                    <h3>{_.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export { ConnectWallet };
