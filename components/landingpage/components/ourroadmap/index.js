import React from "react";
import styles from "./style.module.css";
const RoadMap = () => {
  return (
    <div className={styles.roadMapContainer}>
      <div className={styles.roadMap}>
        <div className={styles.roadMapHeading}>
          <span>We’re fast growing</span>
          <h2>Our Roadmap</h2>
        </div>
      </div>
    </div>
  );
};

export { RoadMap };
