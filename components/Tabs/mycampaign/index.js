import React, { useState, useEffect } from "react";
import styles from "../tabs.module.css";
import image1 from "../../../public/img1.png";
import { Card } from "../../signedin/landingpage/components/card";
import { CampaignDetails } from "../campaigndetails";
import { useAccount } from "wagmi";
import { getAllCreatedCampaigns } from "../../../Integrations/Implementations/Fintrust";

const MyCampaigns = () => {
  const { address, connector, isConnected } = useAccount();

  const [showCampaignDetails, setShowCampaignDetails] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const getAllCampaigns = async () => {
    let campaigns = await getAllCreatedCampaigns(address);
    setCampaigns(campaigns);    
  };

  const itemArray = Array(6).fill(0);

  useEffect(
    () =>{
       async function fetchdata() {
        await getAllCampaigns(address);
      }
      fetchdata();
    }
     ,
    []
  );

  // campaignId: 0;
  // creatorsAddress: "0x1a003097504dfB5474ea81194Dd17f133C5a5cBB";
  // requestedWithdraw: false;
  // targetAmount: "0.000000000000001";
  // totalRaised: "0.0";
  // url: "abcdefg";
  // withdrawApprovals: 0;
  return showCampaignDetails ? (
    <div>
      <CampaignDetails
        handleBack={() => setShowCampaignDetails(!showCampaignDetails)}
      />
    </div>
  ) : (
    <div className={styles.cardWrapper}>
      {campaigns.length > 0 ? (
        campaigns.map((campaign, i) => {         
          return (
            <span onClick={() => setShowCampaignDetails(!showCampaignDetails)}>
              <Card img={image1} amount={campaign.targetAmount} raised={campaign.totalRaised} key={i} />
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
