import React from "react";
import { AboutUs, Hero, HowItWorks, SupportedWalletBanner } from "./components";
const LandinPage = () => {
  return (
    <div>
      <Hero />
      <SupportedWalletBanner />
      <AboutUs />
      <HowItWorks />
    </div>
  );
};

export default LandinPage;
