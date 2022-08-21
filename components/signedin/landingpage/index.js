import { Card } from "./components/card";
import Image from "next/image";
import Pagination from "../../../public/Pagination.svg";
import image1 from "../../../public/img1.png";
import ukrain from "../../../public/ukrain.png";
import polio from "../../../public/polio.png";
import { EmptyState } from "../../emptystate";

export const getStaticProps = async () => {
  const data = await fetch("api.fintrust.io/campaigns");
  const campaigns = await data.json();
  return {
    props: {
      campaigns: campaigns ? campaigns : [],
    },
  };
};

export const LandingPage = ({ campaigns }) => {
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
                <Card key={campaign.id} campaign={campaign} />
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
