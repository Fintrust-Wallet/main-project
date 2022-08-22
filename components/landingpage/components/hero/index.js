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
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Democratizing
            <br />
            fundraising through
            <br /> blockchain.
          </h1>
          <p>
            Explore unparalleled access to donors and projects and support
            <br />
            innovative change that create the future. With secured funds and
            <br />
            records and a transparent process. The future can be created.
          </p>
          <div className={styles.playBtn}>
            <button>
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
  );
};

export { Hero };
