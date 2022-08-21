import React, { useState } from "react";
import donation_photo from "./../../../public/donation_photo.svg";
import { MyCampaignsTab } from "../../mycampaignsdetailscomponents/tabs";
import back from "./../../../public/back.svg";

import { Transact } from "../../mycampaignsdetailscomponents/transact";
import { TransactionHistory } from "../../mycampaignsdetailscomponents/transactionhistory";
import Image from "next/image";
import { WidthdrawalModal } from "../../modals/widthdrawalmodal";
import { SuccessModal } from "../../modals/widthdrawalmodal/successModal";
const CampaignDetails = ({ handleBack }) => {
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
                OPERATION STOP POLIO
              </h1>
            </div>
          </div>
          <div>
            <div className="flex flex-row mt-12 gap-8 justify-between items-center">
              <div className="w-100 rounded-[10px]">
                <Image
                  src={donation_photo}
                  alt="polio"
                  className="w-[502px] h-[300px] rounded-[10px]"
                />
              </div>
              <Transact
                amount={200000}
                raised={100000}
                text={"Withdraw Donations"}
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
                  <MyCampaignsTab />
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
