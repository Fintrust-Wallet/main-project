// import Line from "../../../../../public/Line.svg";
// import Line1 from "../../../../../public/Line1.svg";

import Image from "next/image";

export const Card = ({
  amount,
  raised,
  id,
  title,
  description,
  initiator,
  sentWithdrawalRequest,
  withdrawApprovals,
  imageSrc,
}) => {
  // console.log({ title, description });
  return (
    <>
      <div className="card-bg-blur relative hover:cursor-pointer">
        <Image
          src={imageSrc}
          alt="Image1"
          className="w-[385px] border relative z-[9999] h-[294px] object-cover rounded-t-[10px]"
          height={"294px"}
          width="385px"
        />
        <div className="">
          <div className="pt-5 px-4 pb-8 text-[#d6f6ff]">
            <h1 className="pb-4 uppercase font-sora-light font-[600] leading-[179.9%]">
              {title}
            </h1>
            <p className="font-sora-light w-[100%] box-border  h-[75px] mb-8">
              {description}
            </p>
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
                  ${amount}
                </span>
              </div>
              <div className="text-white grid gap-y-4">
                <h1>Target Raised</h1>
                <span className="text-xl w-[88px] h-[36px] leading-[179.9%] text-green-500 font-sora-bold">
                  ${raised}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
