import React, { useState } from "react";
import security_safe from "./../../../public/security-safe.svg";
import { 
  teddy,
  medical,
  wash,
  bicycle
} from "./../../../public/images";

import Image from "next/image";
import styles from "./tabs.module.css";
const MyCampaignsTab = ({campaign}) => {
 // console.log(campaign, "MY CAMPAIGN TABS")
  const [activeTab, setActiveTab] = useState(0);

  //let _campaign = [...campaign]

  console.log(campaign, "MY CAMPAIGN TABS");

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
  const tabs = [
    {
      name: "Campaign Description",
      content: (
        <div className="w-full flex flex-col gap-8">
          <div className="text-[#fff] ">
            {campaign.campaignDescription || (
                <p>
                  No Description
                </p>            
            )}
          </div>
          <div className="w-full  flex item-start">
            <div className="w-full p-[19px_55px] flex gap-5 items-center bg-[#05526A] text-[#06C4B2]  ">
              <Image src={security_safe} alt="security_safe" />
              <span> Campaign Created by King Alex </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Campaign Media",
      content: (
        <div>
          {" "}
          <div className="grid justify-center  grid-cols-2 ">
            {[teddy, medical, wash, bicycle].map((image, index) => {
              return (
                <div className="h-[220px] w-[270px] mb-1">
                  <Image
                    src={image}
                    className="h-[220px] w-[270px]"
                    alt="teddy"
                    layout="fill"
                  />
                </div>
              );
            })}
          </div>
          <div className="w-full  flex item-start">
            <div className="w-full p-[19px_55px] flex gap-5 items-center bg-[#05526A] text-[#06C4B2]  ">
              <Image src={security_safe} alt="security_safe" />
              <span> Campaign Created by King Alex </span>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const Tab = tabs.map(({ name, content }, i) => {
    return (
      <div
        className={activeTab === i ? styles.activeTab : styles.tab}
        onClick={() => setActiveTab(i)}
      >
        {" "}
        <span>{name}</span>
      </div>
    );
  });

  return (
    <div className={styles.TabContainer}>
      <div className={styles.tabHeader}>{Tab}</div>
      <div className={styles.tabContent}>
        <div>{tabs[activeTab]?.content}</div>
      </div>
    </div>
  );
};

const EmptyState = ({ text }) => {
  return (
    <div className={styles.emptystateWrap}>
      <div className={styles.imageCon}>
        <img />
      </div>
      <p>{text}</p>
    </div>
  );
};
export { MyCampaignsTab };
