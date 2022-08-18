import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./alertstyles.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";

const AlertModal = ({ connectStatus }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {}, [connectStatus]);
  if (isBrowser) {
    return ReactDOM.createPortal(
      <div className={styles.alertContainer}>
        <span className={styles.alertClose}>
          <AiOutlineClose size={15} />
        </span>
        {connectStatus ? (
          <div className={styles.alertContent}>
            <span className={connectStatus && "actve"}>
              <BiLogInCircle size={35} color="hsla(122, 100%, 50%, 1)" />
            </span>
            <span className={styles.alertText}>
              <p>Wallet Connected</p>
            </span>
          </div>
        ) : (
          <div className={styles.alertContent}>
            <span className={connectStatus && "actve"}>
              <BiLogOutCircle
                size={35}
                color="  color: hsla(0, 87%, 49%, 1);"
              />
            </span>
            <span className={styles.alertText}>
              <p>Wallet Disconnected</p>
            </span>
          </div>
        )}
      </div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export { AlertModal };
