import Image from "next/image";
import React from "react";
import { duck } from "../../../../public/images";
import styles from "./style.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutInner}>
        <div className={styles.imageWrap}>
          <Image src={duck} alt="About Us" />
        </div>
        <div className={styles.textWrap}>
          <span>What we do at Fintrust</span>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
            diam in lorem vitae quis faucibus platea amet at. Sed nullam
            praesent condimentum aliquam. Eu ligula viverra vestibulum
            elementum. Eu elit fermentum ut eget nunc. Posuere a tellus, et est
            nulla eu tellus ullamcorper facilisis. Dictum id amet odio pharetra
            et aliquam semper quam amet. Posuere a tellus, et est nulla eu
            tellus ullamcorper facilisis. Dictum id amet odio pharetra et
            aliquam semper quam amet.
          </p>
          <div>
            <a href="">
              <button className={styles.button}>Create campaign</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutUs };
