import Image from "next/image";
import React from "react";
import { iconfeature } from "../../../../public/images";

import styles from "./style.module.css";
const OurFeatures = () => {
  return (
    <div className={styles.ourFeaturesContainer}>
      <div className={styles.ourFeaturesContainerInner}>
        <div className={styles.ourFeaturesHeading}>
          <span>What we do at Fintrust</span>
          <h2>Our Features</h2>
        </div>
        <div className={styles.featuresWrap}>
          <div className={styles.circleAbsolute}>
            <div>
              <Image
                src={iconfeature}
                alt="image"
                height={"100%"}
                width="100%"
              />
            </div>
          </div>
          <div className={styles.card}>
            <h3>Assign Signatories</h3>
            <p>
            Bring in other people vital to the project and add them in as Signatories. 
            People who have this access sign the requests for withdrawal 
            of funds for it to be granted. This is subject to agreement with 
            the Campaign creator and/or other Signatories.

            </p>
          </div>
          <div className={styles.card}>
            <h3>Transparency</h3>
            <p>
            Easily access and view records of how funds are raised, 
            by whom as well as how they are withdrawn and used. Our records 
            are visible and are also secure (immutable) so you can trust 
            that you are indeed viewing as it is.

            </p>
          </div>
          <div className={styles.card}>
            <h3>Decentralized Control</h3>
            <p>
            Only Campaign creators have access to the funds raised on 
            Fintrust for a particular campaign. Fintrust provides the 
            platform and everything needed to raise the funds. Campaign 
            creators can place withdrawal requests and can access the funds 
            once other signatories have signed.

            </p>
          </div>
          <div className={styles.card}>
            <h3>No Government Censorship</h3>
            <p>
            Fintrust enables people to raise and contribute money to ideas 
            and projects without attracting undue risk to their accounts 
            or person. Transactions on Fintrust by virtue of the blockchain 
            are censorship resistant and provide privacy. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OurFeatures };
