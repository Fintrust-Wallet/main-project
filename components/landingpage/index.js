import React from "react";
import {
  AboutUs,
  Hero,
  HowItWorks,
  OurFeatures,
  RoadMap,
  SupportedWalletBanner,
  WhyFintrust,
} from "./components";
import { Banner } from "../../components/Banner";
import Image from "next/image";
import { spiral } from "../images";
import styles from "./style.module.css";
import { NavBar } from "../navbar";
import { Team } from "../Team";
import { Footer } from "../Footer";
import { Banner } from "../Banner";
const LandinPage = () => {
  return (
    <div>
      <NavBar />
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
      <Banner />
      <WhyFintrust />
      <RoadMap />
      <Team />
      <Footer />
    </div>
  );
};

export default LandinPage;
