import { Card } from "./components/card";
import Image from "next/image";
// import Pagination from "../../../public/Pagination.svg";
import back from "../../../public/back.svg";
import linee from "../../../public/linee.svg";
import donation_photo from "../../../public/donation_photo.svg";
import image1 from "../../../public/img1.png";
import ukrain from "../../../public/ukrain.png";
import polio from "../../../public/polio.png";
import { MakeDonations } from "../../modals/makedonations";
import { useState } from "react";
import { ShareCampaign } from "../../modals/sharecampaign";
import { Transact } from "../../mycampaignsdetailscomponents/transact";
import { TransactionHistory } from "../../mycampaignsdetailscomponents/transactionhistory";
import { MyCampaignsTab } from "../../mycampaignsdetailscomponents/tabs";

export const DonationPage = ({ amount, raised,campaign }) => {
  
  const [showMakeDonationsModal, setShowMakeDonationsModal] = useState(false);
  const [showShareThisCampaignModal, setShowShareThisCampaignModal] = useState(false)

  return (
    <>
      <MakeDonations
        open={showMakeDonationsModal}
        onClose={setShowMakeDonationsModal}
      />
      <ShareCampaign
        open={showShareThisCampaignModal}
        onClose={setShowShareThisCampaignModal}
      />
      <div className="mt-44 relative font-sora-light max-w-7xl mx-auto">
        <div className="mx-12">
          <div>
            <button className="w-[221px] h-[57px] text-white bg-primary-900 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] connected-btn">
              <Image src={back} alt="back" />
              <span>Go Back</span>
            </button>
          </div>
          <div>
            <div className="mt-12">
              <h1 className="font-monument font-[400] text-[40px] leading-[46.36px] text-white">
                OPERATION STOP POLIO
              </h1>
            </div>
            <div className="flex flex-row mt-12 gap-8 justify-between items-center">
              <div className="w-100 rounded-[10px]">
                <Image
                  src={donation_photo}
                  alt="polio"
                  className="w-[502px] h-[300px] rounded-[10px]"
                />
              </div>
              <Transact amount={200000 } raised={100000}   setShowMakeDonationsModal={setShowMakeDonationsModal} showMakeDonationsModal ={showMakeDonationsModal} showShareThisCampaignModal={showShareThisCampaignModal} setShowShareThisCampaignModal={setShowShareThisCampaignModal}/>
            </div>
            {/* Next Stage */}
            <div>
              <div>
                <div className="flex flex-row gap-4 font-monument font-[400] text-[16px] leading-[18.54px] text-white">
                  <span>Campaign Description</span>
                  <span>Campaign Media</span>
                </div>
                <TransactionHistory/>
              </div>
            </div>
            {/* End Of Next Stage */}
          </div>
        </div>
        <div className="grid place-items-center relative z-[1000]"></div>
        <div>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-10 px-10 relative top-20 mb-32">
            <Card img={image1} amount="$200,000" raised="$10,000" />
            <Card img={ukrain} amount="$2,000,000" raised="$150,000" />
            <Card img={polio} amount="$1,200,000" raised="$100,000" />
            <Card img={image1} amount="$200,000" raised="$10,000" />
            <Card img={ukrain} amount="$2,000,000" raised="$150,000" />
            <Card img={polio} amount="$1,200,000" raised="$100,000" />
          </div>
          {/* <div className="grid place-items-center mb-10">
            <Image
              src={Pagination}
              alt="Pagination"
              className="object-contain"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};
