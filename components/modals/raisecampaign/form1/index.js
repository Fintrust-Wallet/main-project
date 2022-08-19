import React, { useState } from "react";
import styles from "../form.module.css";
import { AiOutlineClose } from "react-icons/ai";
const CampaignDetails = ({ showForm, setShowForm }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mediaFiles, setMediaFiles] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm("transactForm");
  };
  return (
    <form
      className={
        showForm === "detailsForm"
          ? styles.formcontainer
          : styles.inactiveCampaignForm
      }
      onSubmit={handleSubmit}
    >
      <div className={styles.inner}>
        <div className={styles.body}>
          <h1>Campaign Details</h1>
          <div className={styles.inputWrap}>
            <label htmlFor="campaignName">Campaign title</label>
            <input
              id={"campaignName"}
              placeholder={"Whats the title of your campaign?"}
            />
          </div>
          <div className={styles.inputWrap}>
            <label htmlFor="campaignDesc">Campaign description</label>
            <textarea
              id={"campaignDesc"}
              placeholder={"Whats the title of your campaign?"}
            />
          </div>
          <div className={styles.flex}>
            <div className={styles.text}>
              {" "}
              <h1>Campaign Media</h1>
              <span>You can add as much as 3 media, 20mb max per upload</span>
            </div>
            <div className={styles.upload}>
              <label htmlFor="campaignMedia">Add media</label>
              <input
                type="file"
                id="campaignMedia"
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className={styles.flexCol}>
            {Array(3)
              .fill(0)
              .map((_, i) => {
                return (
                  <div className={styles.filepreview}>
                    <div>
                      <span className={styles.filepreviewtext}>
                        IMG_321837302.png
                      </span>
                      <span className={styles.filepreviewsize}>
                        <span>1.5</span>mb
                      </span>
                    </div>
                    <div>
                      <div className={styles.fileuploadprogress}>
                        <div className={styles.fileuploadprogressbar}></div>
                      </div>
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
        </div>
        <div className={styles.BtnWrap}>
          <button className={styles.btn}>Proceed to create campaign</button>
        </div>
      </div>
    </form>
  );
};

export { CampaignDetails };
