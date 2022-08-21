import React, { useState } from "react";
import { Card } from "../signedin/landingpage/components/card";
import styles from "./tabs.module.css";
import { MyCampaigns } from "./mycampaign";
import { WithdrawalCard } from "./withdrawalcard";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [pendingCampaignRequest, setPendingCampaignRequest] = useState([
    "1",
    2,
    3,
  ]);
  const [actionNeededCampaigns, setActionNeededCampaigns] = useState([
    "new request",
    "new request",
    "declined",
    "approved",
  ]);
  const tabs = [
    {
      name: "My Campaigns",
      content: <MyCampaigns />,
    },
    {
      name: "Authorize Transactions",
      content: (
        <>
          {actionNeededCampaigns.length > 0 ? (
            <div className="flex flex-col gap-8 ">
              <div className="flex justify-between w-full items-center">
                <h2 className="font-monument text-white text-[20px]">
                  Approve Campaign Request from Host
                </h2>
                <div className={styles.sortBox}>
                  <div className="select">
                    <select
                      id="standard-select"
                      className="appearance-none outline-none bg-transparent border px-[1.5rem] py-[.5rem] m-0 font-[inherit] cursor-[pointer] text-white"
                    >
                      <option value="Option 1">New request</option>
                      <option value="Option 2">Approved</option>
                      <option value="Option 3">Declined</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {actionNeededCampaigns.map((_, i) => (
                  <WithdrawalCard status={_} key={i} />
                ))}
              </div>
            </div>
          ) : (
            <EmptyState text={"New Request will show here"} />
          )}
        </>
      ),
    },
    {
      name: "Pending Withdrawals",
      content: (
        <>
          {pendingCampaignRequest.length > 0 ? (
            <div className="flex flex-col gap-4">
              {pendingCampaignRequest.map((_, i) => {
                return <WithdrawalCard status={"pending"} key={i} />;
              })}
            </div>
          ) : (
            <EmptyState text="All pending withdrawal request will show here." />
          )}
        </>
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
export { Tabs };
