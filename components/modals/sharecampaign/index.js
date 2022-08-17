import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./sharecampaign.module.css";
import { AiOutlineClose } from "react-icons/ai";
const ShareCampaign = ({ open, onClose, onConnect }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  if (isBrowser) {
    return ReactDOM.createPortal(
      <form className={open ? styles.active : styles.ShareCampaignContainer}>
        <div className={open ? styles.open : styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Share this campaign</h2>
              <button
                type="button"
                className={styles.close}
                onClick={() => onClose()}
              >
                <AiOutlineClose size={25} />
              </button>
            </div>
            <p className={styles.modalBodyParagraph}>
              Thanks for helping broadcast this campaign.
            </p>
            <div className={styles.modalBody}>
              <div className={styles.inputContainer}></div>
            </div>
          </div>
        </div>
      </form>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export { ShareCampaign };
