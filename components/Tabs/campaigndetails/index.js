import React, { useState } from "react";
import donation_photo from "./../../../public/donation_photo.svg";
import { MyCampaignsTab } from "../../mycampaignsdetailscomponents/tabs";
import back from "./../../../public/back.svg";

import { Transact } from "../../mycampaignsdetailscomponents/transact";
import { TransactionHistory } from "../../mycampaignsdetailscomponents/transactionhistory";
import Image from "next/image";
import { WidthdrawalModal } from "../../modals/widthdrawalmodal";
import { SuccessModal } from "../../modals/widthdrawalmodal/successModal";


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
const CampaignDetails = ({ handleBack, campaign }) => {
  
  const [showMakeDonationsModal, setShowMakeDonationsModal] = useState(false);
  const [showShareThisCampaignModal, setShowShareThisCampaignModal] =
    useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [amount, setAmount] = useState(0);
  return (
    <>
      <WidthdrawalModal
        open={showMakeDonationsModal}
        onClose={setShowMakeDonationsModal}
        setOpenSuccessForm={setShowSuccessModal}
        setAmount={setAmount}
      />
      <SuccessModal
        open={showSuccessModal}
        amount={amount}
        setAmount={setAmount}
        onClose={setShowSuccessModal}
      />
      <div className="relative font-sora-light w-full">
        <div>
          <div className="flex items-center gap-8">
            <button
              onClick={() => handleBack()}
              className="w-[221px] h-[57px] text-white bg-primary-900 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] connected-btn"
            >
              <Image src={back} alt="back" />
              <span>Go Back</span>
            </button>
            <div>
              <h1 className="font-monument font-[400] text-[30px] leading-[46.36px] text-white">
                {campaign.campaignTitle || "OPERATION STOP POLIO"}
              </h1>
            </div>
          </div>
          <div>
            <div className="flex flex-row mt-12 gap-8 justify-between items-center">
              <div className="w-100 rounded-[10px]">
                <Image
                  src={campaign.image0 || donation_photo}
                  alt="Donation image"
                  className="w-[502px] h-[300px] rounded-[10px]"
                  layout="fill"
                />
              </div>
              <Transact
                amount={campaign.campaignAmount || 200000}
                raised={campaign.totalRaised || 100000}
                text={"Request Withdrawal"}
                text2={"Share this campaign"}
                setShowMakeDonationsModal={() =>
                  setShowMakeDonationsModal(!showMakeDonationsModal)
                }
                showMakeDonationsModal={showMakeDonationsModal}
                showShareThisCampaignModal={showShareThisCampaignModal}
                setShowShareThisCampaignModal={setShowShareThisCampaignModal}
              />
            </div>
            {/* Next Stage */}
            <div>
              <div className="flex flex-row mt-12 gap-2 justify-between ">
                <div className="w-full h-fit ">
                  <MyCampaignsTab campaign={campaign} />
                </div>
                <TransactionHistory />
              </div>
            </div>
            {/* End Of Next Stage */}
          </div>
        </div>
        <div className="grid place-items-center relative z-[1000]"></div>
      </div>
    </>
  );
};

export { CampaignDetails };
