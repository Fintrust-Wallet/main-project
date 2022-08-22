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
          What do you get when you put a team of people with expertise and interest in 
          different fields ranging from development to design, research, startup 
          building and fundraising. Nothing actually. However, when all of them have a 
          commitment to creating the future securely and transparently, then you get 
          us at Fintrust. We strongly believe that for world changing ideas to succeed, 
          people with the knowledge and expertise in executing it and those with great 
          interest and support are instrumental. With the control, security and 
          transparency that the blockchain is known for, that can be achieved.

          </p>
          <div>
            <a href="/campaigns">
              <button className={styles.button}>View campaign</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutUs };
