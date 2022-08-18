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
        <div className={styles.roadMapWrap}>
          <div className={styles.roadMapItem}>
            <div className={styles.absoluteArrowDown}></div>
            <div className={styles.absoluteLine}></div>
            <div className={styles.mapHeading}>
              <h4>Launch🚀</h4>
            </div>
            <div className={styles.mapContent}>
              <span className={styles.mapDot}></span>
              <ul className={styles.mapContentBody}>
                <li>
                  {" "}
                  <span className="before"></span>{" "}
                  <span>hdb3jehfejfemfvefhef</span>
                </li>{" "}
                <li>
                  {" "}
                  <span className="before"></span>{" "}
                  <span>hdb3jehfejfemfvefhef</span>
                </li>
                <li>
                  {" "}
                  <span className="before"></span>{" "}
                  <span>hdb3jehfejfemfvefhef</span>
                </li>
                <li>
                  <span className="before"></span>{" "}
                  <span>hdb3jehfejfemfvefhef</span>
                </li>
              </ul>
            </div>
            <div className={styles.mapContentBody}></div>
          </div>
          <div className={styles.roadMapItem}>
            <div className={styles.absoluteArrowDown}></div>
            <div className={styles.absoluteLine}></div>

            <div className={styles.mapHeading}>
              <h4>Phase 2✨</h4>
            </div>
            <div className={styles.mapContent}>
              <span className={styles.mapDot}></span>
              <ul className={styles.mapContentBody}>
                <li>
                  {" "}
                  <span className="before"></span>{" "}
                  <span>hdb3jehfejfemfvefhef</span>
                </li>{" "}
                <li>
                  {" "}
                  <span className="before"></span>{" "}
                  <span>hdb3jehfejfemfvefhef</span>
                </li>
                <li>
                  {" "}
                  <span className="before"></span>{" "}
                  <span>hdb3jehfejfemfvefhef</span>
                </li>
                <li>
                  <span className="before"></span>{" "}
                  <span>hdb3jehfejfemfvefhef</span>
                </li>
              </ul>
            </div>
            <div className={styles.mapContentBody}></div>
          </div>
          <div className={styles.roadMapItem}>
            <div className={styles.absoluteArrowDown}></div>
            <div className={styles.absoluteLine}></div>

            <div className={styles.mapHeading}>
              <h4>Phase 3✨</h4>
            </div>
            <div className={styles.mapContent}>
              <span className={styles.mapDot}></span>
              <ul className={styles.mapContentBody}>
                <li>
                  {" "}
                  <span className="before"></span>{" "}
                  <span>hdb3jehfejfemfvefhef</span>
                </li>{" "}
                <li>
                  {" "}
                  <span className="before"></span>{" "}
                  <span>hdb3jehfejfemfvefhef</span>
                </li>
                <li>
                  {" "}
                  <span className="before"></span>{" "}
                  <span>hdb3jehfejfemfvefhef</span>
                </li>
                <li>
                  <span className="before"></span>{" "}
                  <span>hdb3jehfejfemfvefhef</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { RoadMap };
