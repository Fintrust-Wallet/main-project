import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../connectwalletmodal/connectWalletModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import ReactPlayer from "react-player";

const VideoModal = ({ open, onClose, onConnect }) => {
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
              <h2>Explainer Video</h2>
              <button className={styles.close} onClick={() => onClose()}>
                <AiOutlineClose size={25} />
              </button>
            </div>
            <div>
              <ReactPlayer
                url="https://youtu.be/tiGDMS9yOo4?rel=0"
                controls={true}
                autoplays={true}
                playing={open}
                width="100%"
                className="border"
              />
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
export { VideoModal };
