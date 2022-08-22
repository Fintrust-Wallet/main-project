import React from "react";
import styles from "./style.module.css";
import { BsBookmarkDash, BsFileEarmarkArrowUp } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { mark, pocket, upload } from "../../../../public/images";
import Image from "next/image";
const HowItWorks = () => {
  const data = [
    {
      icon: mark,
      headingtext: "Setup Campaign",
      paragraph:
        "Begin the process by registering your project’s details easily. ",
    },
    {
      icon: upload,
      headingtext: "Share Invite",
      paragraph:
        "Invite others and those on the platform. ",
    },
    {
      icon: pocket,
      headingtext: "Receive Donations",
      paragraph:
        "Invite others and those on the platform. ",
    },
  ];
  return (
    <div className={styles.hcontainer}>
      <div className={styles.howItWorksContainer}>
        <div className={styles.howItWorksTitle}>How it works</div>
        <span className={styles.wrap}>
          {data.map(({ icon, headingtext, paragraph }, i) => (
            <MiniFutureCard
              icon={icon}
              headingtext={headingtext}
              paragraph={paragraph}
              key={i}
            />
          ))}
        </span>
      </div>
    </div>
  );
};

const MiniFutureCard = ({ icon, headingtext, paragraph }) => {
  return (
    <div className={styles.miniCardWrap}>
      <div className={styles.SpanNum}>
        <Image src={icon} alt="image" height={"50px"} width="40px" />
      </div>
      <h4 className={styles.textc}>{headingtext}</h4>
      <p className={styles.textc}>{paragraph}</p>
    </div>
  );
};
export { HowItWorks };
