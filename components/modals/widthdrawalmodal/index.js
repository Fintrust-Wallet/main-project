import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import { AiOutlineClose } from "react-icons/ai";
import { requestWithdraw } from "../../../Integrations/Implementations/Fintrust";
import { getRandomKey } from "../../../utils";
import styles from "./widthdrawal.module.css";
const WidthdrawalModal = ({
  open,
  onClose,
  onConnect,
  setAmount,
  setOpenSuccessForm,
}) => {
  const checkedRef1 = useRef(null);
  const checkedRef2 = useRef(null);

  const [isBrowser, setIsBrowser] = useState(false);
  const [campaignAmount, setCampaignAmount] = useState(0);
  const [campaignReasons, setCampaignReasons] = useState("");
  const [walletAdress, setWalletAdress] = useState("");

  const handleRequestWidthrawal = async () => {
    if (checkedRef1.current.checked && checkedRef2.current.checked) {
      const canRequest =
        walletAdress !== "" && campaignReasons !== "" && campaignAmount !== 0;
      if (canRequest) {
        try {
          requestWithdraw();
          setOpenSuccessForm(true); // open success form when withdrawal is done
          onClose();
          // close modal form when withdrawal is done
          //reset form fields
          setAmount(campaignAmount);
          setCampaignAmount(0);
          setCampaignReasons("");
          setWalletAdress("");
          checkedRef1.current.checked = false;
          checkedRef2.current.checked = false;
          //try to connect to the api server
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Please fill all the fields");
      }
    } else {
      alert("Please check all the checkboxes");
    }
  };
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  if (isBrowser) {
    return ReactDOM.createPortal(
      <div
        className={open ? styles.active : styles.widthdrawalCampaignContainer}
      >
        <div className={open ? styles.open : styles.modalContainer}>
          <div key={getRandomKey()} className={styles.modalInner}>
            <div className={styles.modalHeader}>
              <h2>Withdrawal Request</h2>
              <button
                type="button"
                className={styles.close}
                onClick={() => {
                  // setOpenSuccessForm(false);
                  // setShowForm("detailsForm");
                  onClose();
                }}
              >
                <AiOutlineClose size={25} />
              </button>
            </div>
            <p className={styles.modalBodyParagraph}>
              Please confirm all info before proceeding to avoid loss of funds.
            </p>
            <div className={styles.modalBody}>
              <div className={styles.inputWrap}>
                <label htmlFor="amount">Withdrawal Amount</label>
                <div className={styles.inputContainer}>
                  <div>
                    <label htmlFor="amount">$</label>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className={styles.input}
                      id="amount"
                      name="amount"
                      required
                      value={campaignAmount}
                      onChange={(e) => {
                        setCampaignAmount(e.target.value);
                      }}
                    />
                  </div>
                  <span className={styles.currency}>
                    {campaignAmount / 100} Polygon MATIC
                  </span>
                </div>
                <label>
                  Kindly note that all transactions are carried out on the
                  polygon network
                </label>
              </div>
              <div className={styles.inputWrap}>
                <label htmlFor="reason">Reason for Withdrawal</label>
                <input
                  type="text"
                  placeholder="Enter reason"
                  className={styles.input}
                  id="reason"
                  name="reason"
                  required
                  value={campaignReasons}
                  onChange={(e) => setCampaignReasons(e.target.value)}
                />
                <label>
                  Summarize in five words why you’re withdrawing this funds.
                </label>
              </div>
              <div className={styles.inputWrap}>
                <label htmlFor="waddress">Withdrawal Address</label>
                <div className={styles.inputContainer}>
                  <div>
                    <label htmlFor="waddress">$</label>
                    <input
                      type="text"
                      placeholder="Enter your reasons"
                      className={styles.input}
                      id="waddress"
                      name="waddress"
                      required
                      value={walletAdress}
                      onChange={(e) => setWalletAdress(e.target.value)}
                    />
                  </div>
                  <span className={styles.currency}>Polygon MATIC</span>
                </div>
                <label>
                  Summarize in five words why you’re withdrawing this funds.
                </label>
              </div>

              <div className={styles.flexCol}>
                <div className={styles.flex1}>
                  <input type="checkbox" ref={checkedRef1} />{" "}
                  <label>
                    I have confirmed all transaction info above and I affirm
                    they are correct.
                  </label>
                </div>
                <div className={styles.flex1}>
                  <input type="checkbox" ref={checkedRef2} />{" "}
                  <label>
                    I have confirmed all transaction info above and I affirm
                    they are correct.
                  </label>
                </div>
              </div>
              <div className={styles.modalBodyBtn}>
                <button
                  className={styles.btn}
                  onClick={handleRequestWidthrawal}
                >
                  Proceed to create campaign
                </button>
              </div>
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

export { WidthdrawalModal };
