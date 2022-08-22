import React from "react";
import styles from "./style.module.css";
import {
  explore,
  secured,
  support,
} from "../../../../public/images/index.js";
import Image from "next/image";
const WhyFintrust = () => {
  const cards = [
    { image: explore, text: "Transparency" },
    { image: secured, text: "Secured" },
    { image: support, text: "Support" },
  ].map(({ image, text }, i) => (
    <div className={styles.card} key={i}>
      <div className={styles.cardInner}>
        <div className={styles.image}>
          <Image src={image} alt={text} />
        </div>
        <span>{text}</span>
      </div>
    </div>
  ));
  return (
    <div className={styles.whyFintrustContainer}>
      <div className={styles.whyFintrustContainerInner}>
        <div className={styles.whyFintrustHeading}>
          <span>Why use Fintrust</span>
          <h2>Benefits of using Fintrust</h2>
        </div>
        <div className={styles.whyFintrustCards}>{cards}</div>
      </div>
    </div>
  );
};

export { WhyFintrust };
