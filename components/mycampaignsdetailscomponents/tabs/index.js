import React, { useState } from "react";
import security_safe from "./../../../public/security-safe.svg";
import { 
  teddy,
  medical,
  wash,
  bicycle
} from "./../../../public/images";

import Image from "next/image";
import styles from "./tabs.module.css";
const MyCampaignsTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Campaign Description",
      content: (
        <div className="w-full flex flex-col gap-8">
          <div className="text-[#fff] ">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus amet,
            egestas et, augue vitae maecenas eu sed. Ipsum arcu ullamcorper arcu
            mauris ut. Consequat risus, velit lacinia sagittis diam tellus
            platea pulvinar ullamcorper. Commodo arcu aliquet vitae amet,
            faucibus tortor. Odio dictum lectus purus viverra arcu. 
            </p>
            
            <br />
            <p> Eget
            venenatis at sit sed quam ut morbi dolor. Consequat fusce donec
            risus odio mi sapien tristique. Libero id ipsum, nisl sapien enim
            orci. Leo, odio ullamcorper magna rhoncus turpis quis ultrices non.
            Purus bibendum a massa eleifend. Nisl, rutrum elit a, duis. Nec
            libero mauris viverra elementum vitae, libero, platea quisque
            molestie. Euismod nunc, ipsum varius sapien tortor tincidunt lacus. 
            </p> 
            <br />
            Feugiat lacinia egestas eget sed felis eget. Commodo adipiscing ante
            eget commodo ultrices fames. Phasellus mattis porta laoreet
            convallis mi odio imperdiet in. In et mus urna, neque, suspendisse
            malesuada vel. Elit sit rhoncus vehicula dictum et diam vel lacus.
          </div>
          <div className="w-full  flex item-start">
            
            <div className="w-full p-[19px_55px] flex gap-5 items-center bg-[#05526A] text-[#06C4B2]  ">
              <Image src={security_safe} alt="security_safe" />
               <span> Campaign Created by King Alex </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Campaign Media",
      content: (
        <div>
          {" "}
          <div className="grid justify-center  grid-cols-2 ">
             {
              [teddy, medical, wash, bicycle].map((image, index) => {
                return (
                    <div className="h-[220px] w-[270px] mb-1">
                     <Image src={image} className="h-[220px] w-[270px]" alt="teddy" />
                  </div>
                )
              })
             }

           </div>
          <div className="w-full  flex item-start">
            
            <div className="w-full p-[19px_55px] flex gap-5 items-center bg-[#05526A] text-[#06C4B2]  ">
              <Image src={security_safe} alt="security_safe" />
               <span> Campaign Created by King Alex </span>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const Tab = tabs.map(({ name, content }, i) => {
    return (
      <div
        className={activeTab === i ? styles.activeTab : styles.tab}
        onClick={() => setActiveTab(i)}
      >
        {" "}
        <span>{name}</span>
      </div>
    );
  });

  return (
    <div className={styles.TabContainer}>
      <div className={styles.tabHeader}>{Tab}</div>
      <div className={styles.tabContent}>
        <div>{tabs[activeTab]?.content}</div>
      </div>
    </div>
  );
};

const EmptyState = ({ text }) => {
  return (
    <div className={styles.emptystateWrap}>
      <div className={styles.imageCon}>
        <img />
      </div>
      <p>{text}</p>
    </div>
  );
};
export { MyCampaignsTab };
