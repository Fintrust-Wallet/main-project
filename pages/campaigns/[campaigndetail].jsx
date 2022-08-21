import Head from "next/head";
import Image from "next/image";
import { NavBar } from "../../components/navbar";
import { DonationPage } from "../../components/signedin/DonationCard";
import { Banner } from "../../components/Banner";
import { Team } from "../../components/Team";
import { Footer } from "../../components/Footer";
import LBlurBg from "../../public/Ellipse26.svg";
export const getStaticPaths = async () => {
const res = await fetch("https://api.fintrust.io/api/campaigns");
const data = await res.json();
const paths = data.map((campaign) => ({
path: `/campaigns/${campaign.id}`,
params: { id: campaign.id },
}));
return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  //GET DATA CAMPAIGNS FROM DATABASE
  const id = context.params.id;
  const res = await fetch(`https://api.fintrust.io/api/campaigns/${id}`);
    const data = await res.json();
  return {
    props: { campaign: data },
  };
}

export default function Donation({ campaigns}) {
  //get params from url
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
