import { Card } from "./components/card";
import Image from "next/image";
// import Pagination from "../../../public/Pagination.svg";
import back from "../../../public/back.svg";
import ethereum from "../../../public/ethereum.svg";
import linee from "../../../public/linee.svg";
import security_safe from "../../../public/security-safe.svg";
import donation_photo from "../../../public/donation_photo.svg";
import image1 from "../../../public/img1.png";
import ukrain from "../../../public/ukrain.png";
import polio from "../../../public/polio.png";
import { MakeDonations } from "../../modals/makedonations";
import { useState } from "react";
import { ShareCampaign } from "../../modals/sharecampaign";

export const DonationPage = ({ amount, raised }) => {
  const [showMakeDonationsModal, setShowMakeDonationsModal] = useState(false);
  const [showShareThisCampaignModal, setShowShareThisCampaignModal] = useState(false)
  const history = [
    {
      time: "12/06/2022, 08:01AM",
      address: "0x7bfgh5236457tyu6*****",
      eth: "+0.23ETH",
      amount: "$1,700.00",
    },
    {
      time: "12/06/2022, 08:01AM",
      address: "0x7bfgh5236457tyu6*****",
      eth: "+0.23ETH",
      amount: "$1,700.00",
    },
    {
      time: "12/06/2022, 08:01AM",
      address: "0x7bfgh5236457tyu6*****",
      eth: "+0.23ETH",
      amount: "$1,700.00",
    },
    {
      time: "12/06/2022, 08:01AM",
      address: "0x7bfgh5236457tyu6*****",
      eth: "+0.23ETH",
      amount: "$1,700.00",
    },
    {
      time: "12/06/2022, 08:01AM",
      address: "0x7bfgh5236457tyu6*****",
      eth: "+0.23ETH",
      amount: "$1,700.00",
    },
    {
      time: "12/06/2022, 08:01AM",
      address: "0x7bfgh5236457tyu6*****",
      eth: "+0.23ETH",
      amount: "$1,700.00",
    },
  ];
  return (
    <>
    <MakeDonations open={showMakeDonationsModal} onClose={setShowMakeDonationsModal} />
    <ShareCampaign open={showShareThisCampaignModal} onClose={setShowShareThisCampaignModal} />
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
              <div className="text-white bg-primary-900 p-[17px_31px] flex flex-col rounded-[10px] connected-btn">
                <div className="relative top-3">
                  <svg
                    width="53"
                    height="3"
                    viewBox="0 0 53 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute rounded-full top-[-0.9px]"
                  >
                    <line
                      y1="1.5"
                      x2="53"
                      y2="1.5"
                      stroke="#06C4B2"
                      strokeWidth="3"
                    />
                  </svg>
                  <svg
                    width="315"
                    height="1"
                    viewBox="0 0 345 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rounded-full"
                  >
                    <line y1="0.5" x2="345" y2="0.5" stroke="#026C88" />
                  </svg>
                </div>
                <div className="mt-8 flex flex-row justify-between items-center">
                  <div className="text-white grid gap-y-4">
                    <h1>Target Amount</h1>
                    <span className="text-xl leading-[179.9%] text-green-500 font-sora-bold">
                      {amount || "$200,000"}
                    </span>
                  </div>
                  <div className="text-white grid gap-y-4">
                    <h1>Target Raised</h1>
                    <span className="text-xl w-[88px] h-[36px] leading-[179.9%] text-green-500 font-sora-bold">
                      {raised || "$10,000"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 justify-center items-center mt-8">
                {/* Make donation button */}
                  <button onClick={()=> setShowMakeDonationsModal(!showMakeDonationsModal)} className="w-[428px] h-[59px] text-white bg-green-500 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px]" >
                    Donate
                  </button>
                {/* Make donation button */}
                {/* share donation button */}
                 
                  <button onClick={()=> setShowShareThisCampaignModal(!showShareThisCampaignModal)} className="w-[428px] h-[59px] text-white bg-primary-900 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] connected-btn">
                    <span>Share this Campaign</span>
                  </button>
                {/* Make donation button */}

                </div>
                <div className="mt-12 grid space-y-3">
                  <div className="flex flex-row gap-4 items-center">
                    <Image src={security_safe} alt="security_safe" />
                    <span>Authorized Signatories (3)</span>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <span>
                      Prince Chijioke | Salam Olayemi | Chris Alex Nonso{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Next Stage */}
            <div>
              <div>
                <div className="flex flex-row gap-4 font-monument font-[400] text-[16px] leading-[18.54px] text-white">
                  <span>Campaign Description</span>
                  <span>Campaign Media</span>
                </div>
                <Image src={linee} alt="linee" />
              </div>
              <div className="flex flex-row gap-16 justify-between items-center">
                <div>
                  <span className="text-[14px] w-[590px] font-[300] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus amet, egestas et, augue vitae maecenas eu sed. Ipsum
                    arcu ullamcorper arcu mauris ut. Consequat risus, velit
                    lacinia sagittis diam tellus platea pulvinar ullamcorper.
                    Commodo arcu aliquet vitae amet, faucibus tortor. Odio
                    dictum lectus purus viverra arcu. Eget venenatis at sit sed
                    quam ut morbi dolor. Consequat fusce donec risus odio mi
                    sapien tristique. Libero id ipsum, nisl sapien enim orci.
                    Leo, odio ullamcorper magna rhoncus turpis quis ultrices
                    non. Purus bibendum a massa eleifend. Nisl, rutrum elit a,
                    duis. Nec libero mauris viverra elementum vitae, libero,
                    platea quisque molestie. Euismod nunc, ipsum varius sapien
                    tortor tincidunt lacus. Feugiat lacinia egestas eget sed
                    felis eget. Commodo adipiscing ante eget commodo ultrices
                    fames. Phasellus mattis porta laoreet convallis mi odio
                    imperdiet in. In et mus urna, neque, suspendisse malesuada
                    vel. Elit sit rhoncus vehicula dictum et diam vel lacus.
                  </span>
                </div>
                <div className="text-white bg-primary-900 p-[17px_31px] flex flex-col rounded-[10px] connected-btn">
                  <div className="flex flex-row gap-4 font-monument font-[400] text-[16px] leading-[18.54px] text-white">
                    <span>Transaction History</span>
                  </div>
                  <div className="mt-8 flex flex-col space-y-4">
                    {history.map(({ time, address, eth, amount }, i) => (
                      <div
                        key={i}
                        className="flex flex-row w-[540px] gap-12 items-center"
                      >
                        <Image src={ethereum} alt="ethereum" />
                        <div className="flex flex-row gap-8">
                          <div className="flex flex-col">
                            <span>{time}</span>
                            <span>{address}</span>
                          </div>
                          <div className="flex flex-col">
                            <span>{eth}</span>
                            <span>{amount}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
