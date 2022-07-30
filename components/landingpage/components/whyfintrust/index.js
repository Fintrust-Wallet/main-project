import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
const WhyFintrust = () => {
  const cards = [
    { image: "", text: "Transparency" },
    { image: "", text: "Secured" },
    { image: "", text: "Support" },
  ].map(({ image, text }, i) => (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.image}>
          <Image src={image} />
        </div>
        <span>{text}</span>
      </div>
    </div>
  ));
  return (
    <div className={styles.whyFintrustContainer}>
      <div className={styles.whyFintrustContainerInner}>
        <div className={styles.whyFintrustHeading}>
          <span>What we do at Fintrust</span>
          <h2>Our Features</h2>
        </div>
        <div className={styles.whyFintrustCards}>{cards}</div>
      </div>
    </div>
  );
};

export { WhyFintrust };
