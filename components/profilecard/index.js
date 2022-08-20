import React from "react";
import styles from "./profile.module.css";
import { FaAngleDown } from "react-icons/fa";
const ProfileCard = () => {
  return (
    <div className=" w-fit mx-auto my-14 flex flex-col items-center gap-8">
      <div className={styles.profileCard}>
        <img />
      </div>
      <div className={styles.profileCardId}>
        <p>3FZbQsad*****Zc5</p>
        <span>
          <FaAngleDown size={20} />
        </span>
      </div>
    </div>
  );
};

export { ProfileCard };
