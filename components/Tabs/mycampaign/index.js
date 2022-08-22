import React, { useState, useEffect } from "react";
import styles from "../tabs.module.css";
import importedImage from "../../../public/img1.png";
import { Card } from "../../signedin/landingpage/components/card";
import { CampaignDetails } from "../campaigndetails";
import { useAccount } from "wagmi";
import { getAllCreatedCampaigns } from "../../../Integrations/Implementations/Fintrust";
import emptyStateImage from "../../../public/Group 26795.png";
import Image from "next/image";
const MyCampaigns = () => {
  const { address, connector, isConnected } = useAccount();

  const [showCampaignDetails, setShowCampaignDetails] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [currentCampaign, setCurrentCampaign] = useState({});

  const getAllCampaigns = async () => {
    let campaigns = await getAllCreatedCampaigns(address);
    setCampaigns(campaigns);
  };

  const itemArray = Array(6).fill(0);

  useEffect(() => {
    async function fetchdata() {
      await getAllCampaigns(address);
    }
    fetchdata();
  }, []);

  return showCampaignDetails ? (
    <div>
      <CampaignDetails
        handleBack={() => setShowCampaignDetails(!showCampaignDetails)}
        campaign={currentCampaign}
      />
    </div>
  ) : (
    <div className={styles.cardWrapper}>
      {campaigns.length > 0 ? (
        campaigns.map((campaign, i) => {
          return (
            <span
              key={i}
              onClick={() => {
                setShowCampaignDetails(!showCampaignDetails);
                setCurrentCampaign(campaign);
              }}
            >
              <Card
                amount={campaign.targetAmount}
                raised={campaign.totalRaised}
                description={campaign.campaignDescription}
                id={campaign.campaignId}
                title={campaign.campaignTitle}
                initiator={campaign.creatorsAddress}
                sentWithdrawalRequest={campaign.requestedWithdraw}
                withdrawApprovals={campaign.withdrawApprovals}
                imageSrc={campaign.image0 ? campaign.image0 : importedImage}
              />
            </span>
          );
        })
      ) : (
        <div className={styles.empty}>
          <div className={styles.imageWrap}>
            <Image alt="" src={emptyStateImage} />
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
