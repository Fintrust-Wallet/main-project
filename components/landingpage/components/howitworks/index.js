import React from "react";
import styles from "./style.module.css";
import { BsBookmarkDash, BsFileEarmarkArrowUp } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { mark, pocket, upload } from "../../../images";
import Image from "next/image";
const HowItWorks = () => {
  const data = [
    {
      icon: mark,
      headingtext: "Setup Campaign",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est at libero, cras eu auctor hac lacus, tempus. Eget sit in sit nunc, aliquam. ",
    },
    {
      icon: upload,
      headingtext: "Share Invite",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est at libero, cras eu auctor hac lacus, tempus. Eget sit in sit nunc, aliquam. ",
    },
    {
      icon: pocket,
      headingtext: "Receive Donations",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est at libero, cras eu auctor hac lacus, tempus. Eget sit in sit nunc, aliquam. ",
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
