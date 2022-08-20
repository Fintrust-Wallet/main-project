import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./raisecampaign.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { trustIcon } from "../../../public/images";
import { FaFacebook } from "react-icons/fa";
import { CampaignDetails } from "./form1";
import { CampaignTransactionsDetails } from "./form2";
import { storeFiles } from "../../../Integrations/Utils/web3Storage";
import { createCampaign } from "../../../Integrations/Implementations/Fintrust";

const RaiseCampaign = ({ open, onClose, onConnect, setOpenSuccessForm }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [campaignTitle, setCampaignTitle] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [showForm, setShowForm] = useState("detailsForm");
  const [campaignAmount, setCampaignAmount] = useState("");
  const [ArraySignatories, setArraySignatories] = useState([]);
  const [formOneData, setFormOneData] = useState({});
  const [formTwoData, setFormTwoData] = useState({});

  const handleFormOneSubmit = async (formOneResultObject) => {
    setFormOneData(formOneResultObject);
  };

  const handleFormTwoSubmit = async (formOneResultObject) => {
    setFormTwoData(formOneResultObject);
    await handleCreateCampaign();
  };
  const handleReset = () => {
    setFormOneData({});
    setCampaignTitle("");
    setCampaignDescription("");
    setCampaignAmount("");
    setArraySignatories([]);
  };

  const handleCreateCampaign = async () => {
    const signatoryArray = Object.assign({}, formTwoData.ArraySignatories);

    let { campaignTitle, campaignDescription, mediaFiles } = formOneData;
    let { campaignAmount, _} = formTwoData;

    try{
      const files = [
      new File([mediaFiles], "mediaFiles"),
      new File([signatoryArray], "signatoryArray"),
      new File([campaignDescription], campaignDescription),
      new File([campaignTitle], campaignTitle),
      new File([campaignAmount], campaignAmount),
    ];

    let cid = await storeFiles(files);

    console.log(campaignAmount, "Campaign Amount")
    console.log(formTwoData, "form two data")
    

    let ttransaction = await createCampaign(cid, campaignAmount, formTwoData.ArraySignatories);
    

    console.log(ttransaction, "EVEEEEEEEEEEEEEEEEEEEEEEENt");
    } catch (e){
      console.log("Error", e.message)
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
              <h2>
                {showForm !== "detailsForm"
                  ? "Transaction Details"
                  : "Create a new campaign"}
              </h2>
              <button
                type="button"
                className={styles.close}
                onClick={() => {
                  setOpenSuccessForm(false);
                  setShowForm("detailsForm");
                  onClose();
                }}
              >
                <AiOutlineClose size={25} />
              </button>
            </div>
            <p className={styles.modalBodyParagraph}>
              {showForm !== "detailsForm"
                ? "Please confirm all info before proceeding to avoid loss of funds."
                : "Open a campaign in just a few step and get people to donate seemlessly."}
            </p>
            <div className={styles.modalBody}>
              <CampaignDetails
                showForm={showForm}
                setShowForm={setShowForm}
                campaignTitle={campaignTitle}
                setCampaignTitle={setCampaignTitle}
                campaignDescription={campaignDescription}
                setCampaignDescription={setCampaignDescription}
                handleFormOneSubmit={handleFormOneSubmit}
              />
              <CampaignTransactionsDetails
                showForm={showForm}
                onClose={onClose}
                setShowForm={setShowForm}
                setShowSuccessForm={setOpenSuccessForm}
                campaignAmount={campaignAmount}
                setCampaignAmount={setCampaignAmount}
                ArraySignatories={ArraySignatories}
                setArraySignatories={setArraySignatories}
                reset={() => handleReset()}
                handleFormTwoSubmit={handleFormTwoSubmit}
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
