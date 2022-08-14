import Image from "next/image";
import leftIcon from "../../public/Polygonscan0.png";
import rightIcon from "../../public/Polygonscan1.svg";
import styles from "./styles.module.css"

export const Banner = () => {
  return (
    <>
      <div className="relative grid pt-10 place-items-center text-center h-[328px] bg-primary-100">
        <div className="absolute left-0 top-0">
          <Image
            src={leftIcon}
            alt="Polygonscan"
            className="w-20 h-20 object-contain"
          />
        </div>
        <h1 className={`${styles.textmon} text-white text-[38px] text-center leading-[115.9%] font-[400] w-[870px] h-[112px]`}>
          All transactions on Fintrust are secured on Polygon network.
        </h1>
        <button className="w-[221px] h-[57px] text-white bg-green-500 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px]">
          Create campaign
        </button>
        <div className="absolute right-0 top-10">
          <Image
            src={rightIcon}
            alt="Polygonscan"
            className="w-20 h-20 object-contain absolute right-0"
          />
        </div>
      </div>
    </>
  );
};
