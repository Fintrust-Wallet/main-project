import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fintrust Wallet</title>
        <meta name="description" content="Fintrust Wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Fintrust Wallet</h1>
      </main>
    </div>
  );
}
