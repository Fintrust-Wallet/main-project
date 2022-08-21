import React, { useState } from "react";
import styles from "./withdrawal.module.css";
import donation_photo from "../../../public/donation_photo.svg";

import Image from "next/image";
import { VerifyCampaign } from "../../modals/verifications";
const WithdrawalCard = ({ status }) => {
  const [showCtaModal, setShowCtaModal] = useState(false);
  const [action, setAction] = useState("");
  const handleConnect = (action) => {
    // make api call to connect user actions to campaign
    alert(`you ${action}d this campaign`);
  };
  return (
    <>
      <VerifyCampaign
        open={showCtaModal}
        onClose={() => {
          setShowCtaModal(!showCtaModal);
          setAction("");
        }}
        onConnect={(action) => {
          handleConnect(action);
        }}
        action={action}
      />
      <div className={styles.cardContainer}>
        <div className={styles.flexText}>
          <div className={styles.imageWrap}>
            <Image
              src={donation_photo}
              className="w-[502px] h-[300px] rounded-[10px] object-cover "
            />
          </div>
          <div className={styles.textCol}>
            <h3>Withdrawal request</h3>
            <p>
              The host of Endsars Protest Campaign has intiated a withdrawal
              request and needs you to sign to authorize the request.
            </p>
            <div className={styles.textRow}>
              <div>
                <span className={styles.wSt}>Reasons:</span>
                <span>To send money to mobilize Ogun State</span>
              </div>
              <div>
                <span className={styles.wSt}>Amount:</span>
                <span>$20,000 (213.2 MATIC)</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ctaStatus}>
          {status === "new request" ? (
            <div className="flex gap-4 items-center">
              <div
                className="flex flex-col gap-4 items-center cursor-pointer"
                onClick={() => {
                  setShowCtaModal(!showCtaModal);
                  setAction("Decline");
                }}
              >
                {" "}
                <span className="h-[35px] w-[35px] flex items-center justify-center rounded-[50%] bg-[#fff]">
                  {" "}
                  <span>❌</span>
                </span>
                <span className=" text-white font-sora-regular">Decline</span>
              </div>
              <div
                className="flex flex-col gap-4 items-center cursor-pointer"
                onClick={() => {
                  setShowCtaModal(!showCtaModal);
                  setAction("Approve");
                }}
              >
                {" "}
                <span className="h-[35px] w-[35px] flex items-center justify-center rounded-[50%] bg-[#fff]">
                  <span className=" text-[green]">✔️</span>
                </span>
                <span className=" text-white font-sora-regular">Approve</span>
              </div>
            </div>
          ) : status === "pending" ? (
            <div className="flex gap-4 items-center">
              <span className="h-[35px] w-[35px] rounded-[50%] bg-[#F9B742]"></span>
              <span className=" text-white font-sora-regular">Pending</span>
            </div>
          ) : status === "approved" ? (
            <div className="flex gap-4 items-center">
              <span className="h-[35px] w-[35px] flex items-center justify-center rounded-[50%] bg-[#fff]">
                <span className=" text-[green]">✔️</span>
              </span>
              <span className=" text-white font-sora-regular">Approved</span>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <span className="h-[35px] w-[35px] flex items-center justify-center rounded-[50%] bg-[#fff]">
                <span>❌</span>
              </span>
              <span className=" text-white font-sora-regular">Declined</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { WithdrawalCard };
