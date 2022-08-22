import React, { useState } from "react";
import styles from "./style.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import { walletImage } from "../../../../public/images";
import Image from "next/image";
import { NavBar } from "../../../navbar";
import { VideoModal } from "../../../modals/videoModal";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <VideoModal open={open} onClose={() => setOpen(!open)} />
      <div className={styles.container}>
        <NavBar />
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1>
              Democratizing
              <br />
              fundraising through
              <br /> blockchain.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse
              <br />
              amet sed ut arcu, urna sagittis, vestibulum, curabitur volutpat.
              Eu
              <br />
              id neque lacus, sit. Felis quis sed sed ut cursus.
            </p>
            <div className={styles.playBtn}>
              <button onClick={() => setOpen(!open)}>
                <span>
                  <BsFillPlayFill size={25} />
                </span>
              </button>
              <p>Watch video</p>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image src={walletImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export { Hero };
