import React, { useState } from "react";
import styles from "../tabs.module.css";
import image1 from "../../../public/img1.png";
import { Card } from "../../signedin/landingpage/components/card";

const MyCampaigns = () => {
  const [showCampaignDetails, setShowCampaignDetails] = useState(false);
  const itemArray = Array(6).fill(0);
  return showCampaignDetails ? (
    <div>campaign details</div>
  ) : (
    <div className={styles.cardWrapper}>
      {itemArray.length > 0 ? (
        itemArray.map((_, i) => {
          return (
            <span onClick={() => setShowCampaignDetails(!showCampaignDetails)}>
              <Card img={image1} amount="$200,000" raised="$10,000" key={i} />
            </span>
          );
        })
      ) : (
        <div className={styles.empty}>
          <div className={styles.imageWrap}>
            <img />
          </div>
          <span className={styles.headingText}>
            <h2> You have not created any campaign yet.</h2>
          </span>
          <div className={styles.btnWrap}>
            <button className={styles.button}>Create campaign</button>
          </div>
        </div>
      )}
    </div>
  );
};

export { MyCampaigns };
