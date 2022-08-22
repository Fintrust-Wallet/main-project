import Image from "next/image";
import Link from "next/link";
import leftIcon from "../../public/Polygonscan0.png";
import rightIcon from "../../public/Polygonscan1.svg";
import styles from "./styles.module.css";


export const Banner = () => {
  return (
    <>
      <div className="relative grid pt-10 place-items-center text-center h-[328px] bg-primary-100">
        <div className="absolute left-0 top-0">
          <Image
            src={leftIcon}
            alt="Polygonscan"
            className="md:w-20 md:h-20 w-[21px] h-[21px] object-contain"
          />
        </div>
        <h1
          className={`${styles.textmon} z-10 text-white sm:text-[20px] md:text-[41px] text-[32px] text-center leading-[115.9%] font-[400] md:w-[793px] w-[343px] h-[102px]`}
        >
          All transactions on Fintrust are secured on Polygon network.
        </h1>
      
        <button className="w-[221px] h-[57px] text-white bg-green-500 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px]">
         <Link href="/campaigns">
          View Campaigns
         </Link>
        </button>
        <div className="absolute right-0 top-10">
          <Image
            src={rightIcon}
            alt="Polygonscan"
            className="md:w-20 md:h-20 w-[21px] h-[21px] object-contain absolute right-0"
          />
        </div>
      </div>
    </>
  );
};
