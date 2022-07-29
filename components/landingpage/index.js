import React from "react";
import { AboutUs, Hero, SupportedWalletBanner } from "./components";
const LandinPage = () => {
  return (
    <div>
      <Hero />
      <SupportedWalletBanner />
      <AboutUs />
    </div>
  );
};

export default LandinPage;
