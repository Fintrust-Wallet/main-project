import React from "react";
import ethereum from "../../../public/ethereum.svg";
import Image from "next/image";
const TransactionHistory = () => {
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
      {" "}
      <div className="text-white bg-primary-900 p-[17px_31px] flex flex-col rounded-[10px] connected-btn">
        <div className="flex flex-row gap-4 font-monument font-[400] text-[16px] leading-[18.54px] text-white">
          <span>Transaction History</span>
        </div>
        <div className="mt-8 flex flex-col space-y-4">
          {history.map(({ time, address, eth, amount }, i) => (
            <div
              key={i}
              className="flex flex-row w-[540px] gap-12  justify-between"
            >
              {" "}
              <div className="flex items-center gap-6 ">
                <Image src={ethereum} alt="ethereum" />
                <div className="flex flex-col">
                  <span>{time}</span>
                  <span className="text-[#cec5c5]">{address}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span>{eth}</span>
                <span className="text-[#cec5c5]">{amount}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full p-[10px_10px] flex item-center">
          <button className="w-fit p-[16px_55px] bg-[#05526A] text-[#06C4B2] m-[10px_auto] ">
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export { TransactionHistory };
