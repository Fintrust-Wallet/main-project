import Head from "next/head";
import Image from "next/image";
import { NavBar } from "../../components/navbar";
import { DonationPage } from "../../components/signedin/DonationCard";
import { Banner } from "../../components/Banner";
import { Team } from "../../components/Team";
import { Footer } from "../../components/Footer";
import LBlurBg from "../../public/Ellipse26.svg";

export default function Donation() {
  return (
    <div>
      <Head>
        <title>Fintrust Wallet</title>
        <meta name="description" content="Fintrust Wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pb-10 ">
        <div className="fixed top-0 left-0">
          <Image src={LBlurBg} alt="LBlurBg" className="object-contain" />
        </div>       
        <DonationPage />
        <Banner />
        <Team />       
      </main>
    </div>
  );
}
