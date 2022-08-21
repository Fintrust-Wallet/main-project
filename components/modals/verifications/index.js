import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./verifications.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
const VerifyCampaign = ({ open, onClose, onConnect, action }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (accepted) {
      onConnect(action);
      onClose();
      setAccepted(false);
    } else {
      return alert("Please accept your consent");
    }
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
                {action === "Approve" ? (
                  <span>
                    <AiFillCheckCircle size={60} color={"#06C4B2"} />
                  </span>
                ) : (
                  <span className="h-[35px] w-[35px] flex items-center justify-center rounded-[50%] bg-[#fff]">
                    <span>❌</span>
                  </span>
                )}
              </div>
              <h2>
                {action === "Approve" ? "Approve Request?" : "Decline Request?"}
              </h2>
              <p className={styles.modalBodyParagraph}>
                {action === "Approve"
                  ? "Are you sure you want to approve this withdrawal request? Please note that your action irrevisible."
                  : "Are you sure you want to decline this withdrawal request? Please note that your action irrevisible."}
              </p>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.flex1}>
                <input
                  type="checkbox"
                  onChange={() => setAccepted(!accepted)}
                  checked={accepted}
                />{" "}
                <label>
                  I hereby sign that I am aware of this transacation.
                </label>
              </div>
              <div
                className={
                  action === "Approve" ? styles.modalBodyBtn : styles.buttonred
                }
              >
                <button className={styles.btn}>Approve Request</button>
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

export { VerifyCampaign };
