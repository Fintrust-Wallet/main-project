import Image from "next/image";
import Behance from "../../public/behance.svg";
import Twitter from "../../public/twitter.svg";
import Linkedin from "../../public/Linkedin.svg";
import Dribble from "../../public/Dribble.svg";
import Prince from "../../public/prince.png";
import OpacityPrince from "../../public/opacity-prince.png";


export const Team = () => {
  return (
    <>
      <div className="team px-[4.5rem] mt-10 text-center text-white grid place-items-center border-[1.3px] border-[#fff] !relative">
         <div>
          <span className="font-[400] text-green-100 leading-[179.9%] text-[20px]">
            We serve humanity
          </span>
          <h1 className="w-[302px] h-[56px] font-nomaden-slab font-[400] text-[48px] leading-[115.9%]">
            Meet our Team
          </h1>
        </div>
        <div className="flex flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-y-4 text-left">
            <span className="font-sora-regular font-[600] text-[24px] leading-[179.9%]">
              Prince Chijioke
            </span>
            <span className="font-sora-light font-[600] text-[12px] leading-[179.9%]">
              Product Designer
            </span>
            <p className="font-sora-light font-[400] text-[16px] w-[589px] leading-[179.9%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              posuere eu orci, arcu. Quisque at sit mattis vel penatibus. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex flex-row gap-4">
              <Image
                src={Behance}
                alt="Behance"
                className="w-20 h-20 object-contain rounded-full"
              />
              <Image
                src={Twitter}
                alt="Twitter"
                className="w-20 h-20 object-contain rounded-full"
              />
              <Image
                src={Linkedin}
                alt="Linkedin"
                className="w-20 h-20 object-contain rounded-full"
              />
              <Image
                src={Dribble}
                alt="Dribble"
                className="w-20 h-20 object-contain rounded-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-6">
            <Image
              src={Prince}
              alt="Prince"
              className="w-100 h-100 object-contain rounded-full"
            />
            <Image
              src={OpacityPrince}
              alt="OpacityPrince"
              className="w-100 h-100 object-contain rounded-full"
            />
            <Image
              src={OpacityPrince}
              alt="OpacityPrince"
              className="w-100 h-100 object-contain rounded-full"
            />
            <Image
              src={OpacityPrince}
              alt="OpacityPrince"
              className="w-100 h-100 object-contain rounded-full"
            />
            <Image
              src={OpacityPrince}
              alt="OpacityPrince"
              className="w-100 h-100 object-contain rounded-full"
            />
            <Image
              src={OpacityPrince}
              alt="OpacityPrince"
              className="w-100 h-100 object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};
