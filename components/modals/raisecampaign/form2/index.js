import React, { useState } from "react";
import styles from "../form.module.css";
import { AiOutlineClose } from "react-icons/ai";
const CampaignTransactionsDetails = ({
  showForm,
  setShowForm,
  setShowSuccessForm,
  onClose,
  campaignAmount,
  setCampaignAmount,
  ArraySignatories,
  setArraySignatories,
  reset,
}) => {
  const [sig, setSig] = useState("");
  const handleSig = (e) => {
    if (sig === "") {
      return alert("enter a valid signatory");
    } else {
      setArraySignatories([...ArraySignatories, sig]);
      setSig("");
    }
  };
  const handleRemoveSig = (i) => {
    setArraySignatories(
      [...ArraySignatories].filter((item, index) => index !== i)
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const canContinue = campaignAmount !== "";
    if (canContinue) {
      if (ArraySignatories.length < 3) {
        alert("Please add atleast 3 signatories");
        return;
      }
      setShowForm("detailsForm");
      onClose();
      setShowSuccessForm(true);
      reset();
    } else {
      alert("Please fill all the fields");
    }
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
          <h1>Campaign Amount</h1>
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
                  name="amount"
                  required
                  value={campaignAmount}
                  onChange={(e) => setCampaignAmount(e.target.value)}
                />
              </div>
              <span className={styles.currency}>
                {campaignAmount / 100} Polygon MATIC
              </span>
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
              <label htmlFor="campaignName">Wallet address</label>
              <input
                id={"campaignSignatory"}
                placeholder={"Please paste the person’s Matic Wallet address?"}
                value={sig}
                onChange={(e) => setSig(e.target.value)}
              />
            </div>
            <div className={styles.upload2} onClick={handleSig}>
              <span>Add signatory</span>
            </div>
          </div>
          <span className={styles.spanText}>
            Only Polygon Matic address are accepted.
          </span>
          <div className={styles.flexCol}>
            {ArraySignatories?.map((_, i) => {
              return (
                <div className={styles.filepreview}>
                  <div>
                    <span className={styles.filepreviewtext}>{_}</span>
                  </div>
                  <div>
                    <div className={styles.filepreviewtext}>Signatory</div>
                    <div
                      className={styles.fileuploadclose}
                      onClick={() => handleRemoveSig(i)}
                    >
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
