import { Card } from "./components/card";
import Image from "next/image";
import Pagination from "../../../public/Pagination.svg";
import image1 from "../../../public/img1.png";
import ukrain from "../../../public/ukrain.png";
import polio from "../../../public/polio.png";
import { EmptyState } from "../../emptystate";
import { getAllCampaigns } from "../../../Integrations/Implementations/Fintrust";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
export const getStaticProps = async () => {
  const data = await getAllCampaigns();
  //const data = await fetch("api.fintrust.io/campaigns");
  console.log(data, "data all campaigns");
  const campaigns = await data.json();
  return {
    props: {
      campaigns: campaigns ? campaigns : [],
    },
  };
};

export const LandingPage = ({}) => {
  const [campaigns, setCampaigns] = useState([]);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    const fetchCampaigns = async () => {
      const data = await getAllCampaigns();
      setCampaigns(data);
      console.log(data, "data all campaigns");
    };

    if (mounted) {
      fetchCampaigns();
    }
    return () => {
      mounted = false;
    };
  }, []);
  //   campaignAmount: 200
  // campaignDescription: "hello world"
  // campaignId: 0
  // campaignTitle: "I need food"
  // creatorsAddress: "0x07aB1D733fddDa5e25455eae461f14f0C1f3d60E"
  // image0: "https://ipfs.io/ipfs/bafkreihz2fbk6pk4ybzfmeyovlixah4nh76bxsyx5mrmakvzkpet2bmizm"
  // image1: "https://ipfs.io/ipfs/bafkreihz2fbk6pk4ybzfmeyovlixah4nh76bxsyx5mrmakvzkpet2bmizm"
  // image2: "https://ipfs.io/ipfs/bafybeicotsdioyngw4b7jp7zbscdubdn3jwexcdfxraakbaqducl6hzpfa"
  // requestedWithdraw: false
  // targetAmount: "200.0"
  // totalRaised: "0.0"
  // url: "bafybeiaqq53pujzskhkwg4dcwvh5kcrymfwvldr5mydtzojnm764jzop74"
  // withdrawApprovals: 0
  return (
    <>
      <div className="mt-44  max-w-7xl mx-auto">
        <div className="grid place-items-center relative z-[1000]">
          <h1 className="font-nomaden-slab text-white md:text-[48px] text-[32px] text-center leading-[115.9%] font-[400] md:w-[793px] w-[393px] h-[112px]">
            Donating on a transparent platform powered by Polygon.
          </h1>
        </div>
        <div className="w-full">
          {campaigns ?? [].length < 0 ? (
            <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-10 px-10 relative top-20 mb-32">
              {campaigns.map((campaign) => (
                <span
                  onClick={() => {
                    router.push(`/campaigns/${campaign?.campaignId}`);
                  }}
                >
                  <Card
                    key={campaign?.campaignId}
                    imageSrc={campaign?.image0}
                    title={campaign?.campaignTitle}
                    description={campaign?.campaignDescription}
                    amount={campaign?.targetAmount}
                    raised={campaign?.totalRaised}
                  />
                </span>
              ))}
            </div>
          ) : (
            <div className="text-center w-full mx-auto flex items-center justify-end">
              <EmptyState
                text={"No campaign has been created yet on Fintrust."}
                font="monument"
              />
            </div>
          )}
          {campaigns?.length > 0 && (
            <div className="grid place-items-center mb-10">
              <Image
                src={Pagination}
                alt="Pagination"
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
