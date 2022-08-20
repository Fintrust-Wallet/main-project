import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./makedonations.module.css";
import { AiOutlineClose } from "react-icons/ai";
const MakeDonations = ({ open, onClose, onConnect }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [amount, setAmount] = useState("");

  const handleDonation = () => {
    if (!amount){
      alert("Please fill in an amount");
    }
  }

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  if (isBrowser) {
    return ReactDOM.createPortal(
      <form className={open ? styles.active : styles.makeDonationsContainer}>
        <div className={open ? styles.open : styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Donate</h2>
              <button
                type="button"
                className={styles.close}
                onClick={() => onClose()}
              >
                <AiOutlineClose size={25} />
              </button>
            </div>
            <p className={styles.modalBodyParagraph}>
              Send in your donations on the go at ease by puting your desired
              amount and tapping the donate button.
            </p>
            <div className={styles.modalBody}>
              <div className={styles.inputContainer}>
                <div>
                  <label htmlFor="amount">$</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className={styles.input}
                    id="amount"
                    onChange={e => setAmount(e.target.value)}
                  />
                </div>
                <span className={styles.currency}>2.012 Polygon MATIC</span>
              </div>
              <div className={styles.modalBodyBtn}>
                <button type="submit">Donate</button>
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

export { MakeDonations };
