import React from "react";
import styles from "../form.module.css";
import { AiOutlineClose } from "react-icons/ai";
const CampaignTransactionsDetails = ({
  showForm,
  setShowForm,
  setShowSuccessForm,
  onClose,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm("detailsForm");
    onClose();
    setShowSuccessForm(true);
  };
  return (
    <form
      className={
        showForm === "transactForm"
          ? styles.formcontainer
          : styles.inactiveCampaignForm
      }
      onSubmit={handleSubmit}
    >
      <div className={styles.inner}>
        <div className={styles.body}>
          <h1>Campaign Details</h1>
          <div className={styles.inputWrap}>
            <label htmlFor="amount">Amount</label>
            <div className={styles.inputContainer}>
              <div>
                <label htmlFor="amount">$</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className={styles.input}
                  id="amount"
                />
              </div>
              <span className={styles.currency}>2.012 Polygon MATIC</span>
            </div>
            <label>
              Kindly note that all transactions are carried out on the polygon
              network
            </label>
          </div>
          <br />

          <div>
            <h1>Assign Signatories</h1>
            <span className={styles.spanText}>
              This persons will have to authorize any transaction on this
              campaign (Minimum of 3)
            </span>
          </div>
          <div className={styles.flex}>
            <div className={styles.inputWrap}>
              <label htmlFor="campaignName">Campaign title</label>
              <input
                id={"campaignName"}
                placeholder={"Whats the title of your campaign?"}
              />
            </div>
            <div className={styles.upload2}>
              <select>
                <option value="">Select role</option>
              </select>
            </div>
          </div>
          <span className={styles.spanText}>
            Only Polygon Matic address are accepted.
          </span>
          <div className={styles.flexCol}>
            {Array(2)
              .fill(0)
              .map((_, i) => {
                return (
                  <div className={styles.filepreview}>
                    <div>
                      <span className={styles.filepreviewtext}>
                        0x7bfgh5236457tyu689573542tg4624347c677
                      </span>
                    </div>
                    <div>
                      <div className={styles.filepreviewtext}>Signatory</div>
                      <div className={styles.fileuploadclose}>
                        <span>
                          <AiOutlineClose size={20} />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={styles.flexCol}>
            <div className={styles.flex1}>
              <input type="checkbox" />{" "}
              <label>
                I have confirmed all transaction info above and I affirm they
                are correct.
              </label>
            </div>
          </div>
        </div>
        <div className={styles.BtnWrap}>
          <button className={styles.btn}>Create Campaign</button>
        </div>
      </div>
    </form>
  );
};

export { CampaignTransactionsDetails };
