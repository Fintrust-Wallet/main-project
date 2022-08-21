import Head from "next/head";
import LandinPage from "../components/landingpage";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fintrust</title>
        <meta
          name="description"
          content="Democratizing fundraising through blockchain."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandinPage />
      <Team />     
    </div>
  );
}
