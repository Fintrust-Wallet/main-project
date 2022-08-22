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

  // campaignAmount: 10000;
  // campaignDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
  // campaignId: 1;
  // campaignTitle: "End Sars";
  // creatorsAddress: "0x1a003097504dfB5474ea81194Dd17f133C5a5cBB";
  // image0: "https://bafkreidn7eclsuci4dyp7e47vifjns2ybb72tdlvn67delstj467wjr4ci.ipfs.w3s.link/";
  // image1: "https://bafkreigfcnyc6bazjwvqn5hjyik5kwxq2kiecephuj24g5na5ahckej6tq.ipfs.w3s.link/";
  // image5: "https://bafybeigozmtar3tqi7cd3kaojyq2obljho2nayg4oh435evrq7npd27xia.ipfs.w3s.link/";
  // requestedWithdraw: false;
  // targetAmount: "10000.0";
  // totalRaised: "0.0";
  // url: "bafybeid4b32eqo5prgyrwq62vq4kfowsyut227gqk25ulqirb6k5wxxage";
  // withdrawApprovals: 0;
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
                key={i}
              />
            </span>
          );
        })
      ) : (
        <div className={styles.empty}>
          <div className={styles.imageWrap}>
            <Image src={emptyStateImage} />
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
