import Head from "next/head";
import Image from "next/image";
import { NavBar } from "../../components/navbar";
import { DonationPage } from "../../components/signedin/DonationCard";
import { Banner } from "../../components/Banner";
import { Team } from "../../components/Team";
import { Footer } from "../../components/Footer";
import LBlurBg from "../../public/Ellipse26.svg";
import { useAccount } from "wagmi";
import { getACampaign } from "../../Integrations/Implementations/Fintrust";
import { useEffect, useState } from "react";


export default function Donation({ campaigns}) {
  const { address, connector, isConnected } = useAccount();
  const [campaign, setCampaign] = useState([]);
  
  useEffect(() => {
    let mounted = true;
    const fetchCampaign = async () => {
      const campaign = await getACampaign(address,0)
      console.log("campaigns", campaign);
      setCampaign(campaign)
    }
    if (mounted) {
      fetchCampaign();
    }
    return () => {
      mounted = false;
    }
  } , [address, campaigns]);
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
        <DonationPage campaign={campaign} />
        <Banner />
        <Team />        
      </main>
    </div>
  );
}
