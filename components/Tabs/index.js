import React, { useState } from "react";
import { Card } from "../signedin/landingpage/components/card";
import styles from "./tabs.module.css";
import { MyCampaigns } from "./mycampaign";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "My Campaigns",
      content: <MyCampaigns />,
    },
    {
      name: "Authorize Transactions",
      content: <div>My Campaigns</div>,
    },
    {
      name: "Pending Withdrawals",
      content: <div>Pending Withdrawals</div>,
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

export { Tabs };
