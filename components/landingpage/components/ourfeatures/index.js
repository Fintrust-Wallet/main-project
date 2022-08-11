import React from "react";

import styles from "./style.module.css";
const OurFeatures = () => {
  return (
    <div className={styles.ourFeaturesContainer}>
      <div className={styles.ourFeaturesContainerInner}>
        <div className={styles.ourFeaturesHeading}>
          <span>What we do at Fintrust</span>
          <h2>Our Features</h2>
        </div>
        <div className={styles.featuresWrap}>
          <div className={styles.circleAbsolute}>
            <div></div>
          </div>
          <div className={styles.card}>
            <h3>Public Fundraise</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              posuere eu orci, arcu. Quisque at sit mattis vel penatibus. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              posuere eu orci, arcu. Quisque at sit mattis vel penatibus.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Public Fundraise</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              posuere eu orci, arcu. Quisque at sit mattis vel penatibus. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              posuere eu orci, arcu. Quisque at sit mattis vel penatibus.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Public Fundraise</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              posuere eu orci, arcu. Quisque at sit mattis vel penatibus. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              posuere eu orci, arcu. Quisque at sit mattis vel penatibus.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Public Fundraise</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              posuere eu orci, arcu. Quisque at sit mattis vel penatibus. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              posuere eu orci, arcu. Quisque at sit mattis vel penatibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OurFeatures };
