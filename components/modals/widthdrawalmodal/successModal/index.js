import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../verifications/verifications.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
const SuccessModal = ({ open, onClose, amount, setAmount, onConnect }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAmount(0);
    onClose();
  };

  if (isBrowser) {
    return ReactDOM.createPortal(
      <form
        className={open ? styles.active : styles.ShareCampaignContainer}
        onSubmit={handleSubmit}
      >
        <div className={open ? styles.open : styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2></h2>
              <button
                type="button"
                className={styles.close}
                onClick={() => onClose()}
              >
                <AiOutlineClose size={25} />
              </button>
            </div>

            <div className={styles.heading}>
              <div className="flex items-center justify-center">
                <span>
                  <AiFillCheckCircle size={60} color={"#06C4B2"} />
                </span>
              </div>
              <h2>Approve Request?</h2>
              <p className={styles.modalBodyParagraph}>
                You have successfully sent a withdrawal request of $
                {amount ?? "200, 000"} to all your signatories.
              </p>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalBodyBtn}>
                <button className={styles.btn}>Back to campaign</button>
              </div>
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

export { SuccessModal };
