import React from "react";
import styles from "./style.module.css";
import { BsFillPlayFill } from "react-icons/bs";
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Democratizing
            <br /> fundraising through <br />
            blockchain.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            <br />
            amet sed ut arcu, urna sagittis, vestibulum, curabitur volutpat. Eu
            <br />
            id neque lacus, sit. Felis quis sed sed ut cursus.
          </p>
          <div className={styles.playBtn}>
            <button>
              <span>
                <BsFillPlayFill size={25} />
              </span>
            </button>
            <p>Watch video</p>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img />
        </div>
      </div>
    </div>
  );
};

export { Hero };