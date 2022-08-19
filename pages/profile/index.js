import Head from "next/head";
import Image from "next/image";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/Footer";
import LBlurBg from "../../public/Ellipse26.svg";
import { ProfileCard } from "../../components/profilecard";
import { Tabs } from "../../components/Tabs";

export default function Profile() {
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
        <NavBar />
        <div className="mt-44 relative font-sora-light max-w-7xl mx-auto">
          <ProfileCard />
          <Tabs />
          <Footer />
        </div>
      </main>
    </div>
  );
}
