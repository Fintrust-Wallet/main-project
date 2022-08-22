import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./connectWalletModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import {
  CoinbaseIcon,
  injected,
  MetaMaskEmblem,
  trustIcon,
  walletConnectIcon,
} from "../../../public/images";
import Image from "next/image";
import { useConnect } from "wagmi";

const ConnectWallet = ({ open, onClose, onConnect }) => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

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
                  connector: connectors[0],
                },
                {
                  name: "Coinbase",
                  icon: CoinbaseIcon,
                  connector: connectors[1],
                },
                {
                  name: "Walletconnect",
                  icon: walletConnectIcon,
                  connector: connectors[2],
                },
                {
                  name: "Injected Connector",
                  icon: injected,
                  connector: connectors[3],
                },
              ].map((_, index) => (
                <div
                  className={styles.wallet}
                  key={index}
                  onClick={() => {
                    onConnect(_.connector);
                    onClose();
                  }}
                >
                  <div className={styles.walletIcon}>
                    <Image
                      src={_.icon}
                      alt={_.connector.name}
                      height="90px"
                      width={"90px"}
                      className="object-contain"
                    />
                  </div>
                  <div className={styles.walletName}>
                    <h3>{_.connector.name}</h3>
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
