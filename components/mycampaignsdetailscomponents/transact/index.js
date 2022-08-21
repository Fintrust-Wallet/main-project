import React from "react";
import security_safe from "./../../../public/security-safe.svg";
import Image from "next/image";

const Transact = ({
  amount,
  raised,
  setShowMakeDonationsModal,
  showMakeDonationsModal,
  setShowShareThisCampaignModal,
  showShareThisCampaignModal,
  text,
  text2,
}) => {
  return (
    <div className="text-white bg-primary-900 p-[17px_31px] flex h-[460px] flex-col rounded-[10px] connected-btn">
      <div className="relative top-3  w-full bg-[#028493] h-[1px] ">
        <div
          className={`absolute w-[${
            (raised / amount) * 100
          }%] bg-[#06C4B2] top-0 left-0 h-full`}
        ></div>
      </div>
      <div className="mt-8 flex flex-row justify-between items-center">
        <div className="text-white grid gap-y-4">
          <h1>Target Amount</h1>
          <span className="text-xl leading-[179.9%] text-green-500 font-sora-bold">
            ${amount || "200,000"}
          </span>
        </div>
        <div className="text-white grid gap-y-4">
          <h1>Target Raised</h1>
          <span className="text-xl w-[88px] h-[36px] leading-[179.9%] text-green-500 font-sora-bold">
            ${raised || "10,000"}
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-4 justify-center items-center mt-8">
        {/* Make donation button */}
        <button
          onClick={() => setShowMakeDonationsModal(!showMakeDonationsModal)}
          className="w-[428px] h-[59px] text-white bg-green-500 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px]"
        >
          {text ?? "Donate"}
        </button>
        {/* Make donation button */}
        {/* share donation button */}

        <button
          onClick={() =>
            setShowShareThisCampaignModal(!showShareThisCampaignModal)
          }
          className="w-[428px] h-[59px] text-white bg-primary-900 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] connected-btn"
        >
          <span>{text2 ?? "Share this Campaign"}</span>
        </button>
        {/* Make donation button */}
      </div>
      <div className="mt-12 grid space-y-3">
        <div className="flex flex-row gap-4 items-center">
          <Image src={security_safe} alt="security_safe" />
          <span>Authorized Signatories (3)</span>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <span>Prince Chijioke | Salam Olayemi | Chris Alex Nonso </span>
        </div>
      </div>
    </div>
  );
};

export { Transact };
