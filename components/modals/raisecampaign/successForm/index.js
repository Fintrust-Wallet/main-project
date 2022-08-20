import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./success.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
const SuccessForm = ({ open, onClose, onConnect }) => {
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
              <span>
                <AiFillCheckCircle size={60} />
              </span>
              <h2>Campaign Created Successfully.</h2>
              <p className={styles.modalBodyParagraph}>
                Your campaign has been created successfully, you can share this
                campaign and start receiving donations.
              </p>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.inputContainer}>
                <span>www.fintrust.com/endsars-campaign</span>
                <span></span>
              </div>
              <div className={styles.text}>Share on;</div>
              <div className={styles.social}>
                <div>
                  <span>
                    <FaFacebook size={30} />
                  </span>
                  <span>Facebook</span>
                </div>
                <div>
                  <span>
                    <FaFacebook size={30} />
                  </span>

                  <span>Facebook</span>
                </div>
                <div>
                  <span>
                    <FaFacebook size={30} />
                  </span>

                  <span>Facebook</span>
                </div>
                <div>
                  <span>
                    <FaFacebook size={30} />
                  </span>

                  <span>Facebook</span>
                </div>
                <div>
                  <span>
                    <FaFacebook size={30} />
                  </span>

                  <span>Facebook</span>
                </div>
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

export { SuccessForm };
