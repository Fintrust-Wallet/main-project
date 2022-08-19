import React, { useState } from "react";
import styles from "../form.module.css";
import { AiOutlineClose } from "react-icons/ai";

const CampaignDetails = ({
  showForm,
  setShowForm,
  campaignTitle,
  setCampaignTitle,
  campaignDescription,
  setCampaignDescription,
  handleFormOneSubmit,
}) => {

  const [mediaFiles, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const canContinue =
      campaignTitle !== "" && campaignDescription !== "" && mediaFiles !== [];

    if (canContinue) {
      if (mediaFiles.length > 3) {
        alert("You are only allowed to upload a maximum of 3 files at a time");
        return;
      }

      //check file size
      if (mediaFiles.length > 0) {
        for (let i = 0; i < mediaFiles.length; i++) {
          if (mediaFiles[i].size / 1024 / 1024 > 5)
            return alert("File size is too big");
        }
      }
      let formInput = { campaignTitle, campaignDescription, mediaFiles };
      handleFormOneSubmit(formInput);
      setLoading(true);
      setShowForm("transactForm");

      try {
        //make request to server
        // setUploadProgress(progress)
      } catch {
        setLoading(false);
        alert("Something went wrong");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleDeleteFileItem = (i) => {
    setFiles([...mediaFiles].filter((item, index) => index !== i));
  };

  console.log(formInput, "FORMINPUT🤔🤔")

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
              value={campaignTitle}
              onChange={(e) => setCampaignTitle(e.target.value)}
              placeholder={"Whats the title of your campaign?"}              
            />
          </div>
          <div className={styles.inputWrap}>
            <label htmlFor="campaignDesc">Campaign description</label>
            <textarea
              id={"campaignDesc"}
              value={campaignDescription}
              onChange={(e) => setCampaignDescription(e.target.value)}
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
              <label htmlFor={loading ? "" : "campaignMedia"}>
                {loading ? `uploading  ${uploadProgress}%` : "Add media"}
              </label>
              <input
                type="file"
                multiple
                id="campaignMedia"
                accept="image/*"
                onChange={(e) => setFiles(e.target.files)}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className={styles.flexCol}>
            {[...mediaFiles].map((_, i) => {
              return (
                <div className={styles.filepreview}>
                  <div>
                    <span className={styles.filepreviewtext}>{_?.name}</span>
                    <span className={styles.filepreviewsize}>
                      <span>{(_?.size / 1024 / 1024).toFixed(4)}</span>mb
                    </span>
                  </div>
                  <div>
                    <div className={styles.fileuploadprogress}>
                      <div className={styles.fileuploadprogressbar}></div>
                    </div>
                    <div
                      className={styles.fileuploadclose}
                      onClick={() => handleDeleteFileItem(i)}
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
        </div>
        <div className={styles.BtnWrap}>
          <button className={styles.btn}>Proceed to create campaign</button>
        </div>
      </div>
    </form>
  );
};

export { CampaignDetails };
