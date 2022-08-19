import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./raisecampaign.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { trustIcon } from "../../../public/images";
import { FaFacebook } from "react-icons/fa";
import { CampaignDetails } from "./form1";
import { CampaignTransactionsDetails } from "./form2";
import { validateFormInput } from "../../../Integrations/Utils/ipfshandler";
const RaiseCampaign = ({ open, onClose, onConnect, setOpenSuccessForm }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [showForm, setShowForm] = useState("detailsForm");
  const [formOneData, setFormOneData] = useState({});
  const [hasSetFormOne, setHasSetFromOne] = useState(false);

  handleFormOneSubmit = async (formOneResultObject) => {
    const isValidData = await validateFormInput(formOneResultObject);

    if (isValidData) {
      setFormOneData(formOneResultObject);
      setHasSetFromOne(true);      
    }  
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  if (isBrowser) {
    return ReactDOM.createPortal(
      <div className={open ? styles.active : styles.RaiseCampaignContainer}>
        <div className={open ? styles.open : styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Create a new campaign</h2>
              <button
                type="button"
                className={styles.close}
                onClick={() => onClose()}
              >
                <AiOutlineClose size={25} />
              </button>
            </div>
            <p className={styles.modalBodyParagraph}>
              Open a campaign in just a few step and get people to donate
              seemlessly.
            </p>
            <div className={styles.modalBody}>
              <CampaignDetails
                showForm={showForm}
                setShowForm={setShowForm}
                handleFormOneSubmit={handleFormOneSubmit}
              />
              <CampaignTransactionsDetails
                showForm={showForm}
                onClose={onClose}
                setShowForm={setShowForm}
                setShowSuccessForm={setOpenSuccessForm}
                formOne = {hasSetFormOne ? formOneData : null}
              />
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

export { RaiseCampaign };
