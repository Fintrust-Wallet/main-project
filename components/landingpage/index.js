import React from "react";
import {
  AboutUs,
  Hero,
  HowItWorks,
  OurFeatures,
  SupportedWalletBanner,
  WhyFintrust,
} from "./components";
import Image from "next/image";
import { spiral } from "../images";
import styles from "./style.module.css";
const LandinPage = () => {
  return (
    <div>
      <Hero />
      <SupportedWalletBanner />
      <AboutUs />
      <div className={styles.Wrap}>
        <div className={styles.ourFeaturesAbsolute}>
          <Image src={spiral} alt="spiral" />
        </div>
        <HowItWorks />
        <OurFeatures />
      </div>
      <WhyFintrust />
    </div>
  );
};

export default LandinPage;
