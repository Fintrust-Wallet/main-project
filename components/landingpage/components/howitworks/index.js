import React from "react";
import styles from "./style.module.css";
import { BsBookmarkDash, BsFileEarmarkArrowUp } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
const HowItWorks = () => {
  const data = [
    {
      Icon: BsBookmarkDash,
      headingtext: "Setup Campaign",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est at libero, cras eu auctor hac lacus, tempus. Eget sit in sit nunc, aliquam. ",
    },
    {
      Icon: BsFileEarmarkArrowUp,
      headingtext: "Share Invite",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est at libero, cras eu auctor hac lacus, tempus. Eget sit in sit nunc, aliquam. ",
    },
    {
      Icon: FaWallet,
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
          {data.map(({ Icon, headingtext, paragraph }, i) => (
            <MiniFutureCard
              Icon={Icon}
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

const MiniFutureCard = ({ Icon, headingtext, paragraph }) => {
  return (
    <div className={styles.miniCardWrap}>
      <div className={styles.SpanNum}>
        <Icon size={30} color={"hsla(194, 100%, 44%, 1)"} />
      </div>
      <h4 className={styles.textc}>{headingtext}</h4>
      <p className={styles.textc}>{paragraph}</p>
    </div>
  );
};
export { HowItWorks };
