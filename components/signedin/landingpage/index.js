import { Card } from "./components/card";
import Image from "next/image";
import Pagination from "../../../public/Pagination.svg";
import image1 from "../../../public/img1.png";
import ukrain from "../../../public/ukrain.png";
import polio from "../../../public/polio.png";

export const LandingPage = () => {
  return (
    <>
      <div className="mt-44">
        <div className="grid place-items-center relative z-[1000]">
          <h1 className="font-nomaden-slab text-white md:text-[48px] text-[32px] text-center leading-[115.9%] font-[400] md:w-[793px] w-[393px] h-[112px]">
            Donating on a transparent platform powered by Polygon.
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-10 px-10 relative top-20 mb-32">
            <Card img={image1} amount="$200,000" raised="$10,000" />
            <Card img={ukrain} amount="$2,000,000" raised="$150,000" />
            <Card img={polio} amount="$1,200,000" raised="$100,000" />
            <Card img={image1} amount="$200,000" raised="$10,000" />
            <Card img={ukrain} amount="$2,000,000" raised="$150,000" />
            <Card img={polio} amount="$1,200,000" raised="$100,000" />
          </div>
          <div className="grid place-items-center mb-10">
            <Image
              src={Pagination}
              alt="Pagination"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};
