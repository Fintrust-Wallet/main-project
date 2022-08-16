import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./alertstyles.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

const AlertModal = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  if (isBrowser) {
    return ReactDOM.createPortal(
      <div className={styles.alertContainer}>
        <span className={styles.alertClose}>
          <AiOutlineClose size={15} />
        </span>
        <div className={styles.alertContent}>
          <span>
            <BiLogOutCircle />
          </span>
          <span className={styles.alertText}>
            <p>Wallet Connected</p>
          </span>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export { AlertModal };
