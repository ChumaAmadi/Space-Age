import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sol from "../public/feature3.png";
import Planet from "../public/feature1.png";
import Skull from "../public/feature5.png";
import Clan from "../public/feature2.png";

const FeatureState = () => {
    const [activeFeature, setActiveFeature] = useState("");
  
    const handleClick = (feature: React.SetStateAction<string>) => {
      setActiveFeature(feature);
    };
  
    return (
      <div>
        <h1 className = {styles.featureTitle}>Game Features</h1>
        <div className={styles.featureState}>
          <div className={styles.featureState2}>
            <Image
              src={Sol}
              width={220}
              height={160}
              onClick={() => handleClick("Feature 1")}
              alt=" "
            />
            {activeFeature === "Feature 1" && (
              <p className={styles.featureText1}>This is the text for Feature 1</p>
            )}
          </div>
          <div className={styles.featureState2}>
            <Image
              src={Planet}
              width={350}
              height={370}
              onClick={() => handleClick("Feature 2")}
              alt=" "
            />
            {activeFeature === "Feature 2" && (
              <p className={styles.featureText2}>This is the text for Feature 2</p>
            )}
          </div>
          <div className={styles.featureState2}>
            <Image
              src={Skull}
              width={270}
              height={270}
              onClick={() => handleClick("Feature 3")}
              alt=" "
            />
            {activeFeature === "Feature 3" && (
              <p className={styles.featureText3}>This is the text for Feature 3</p>
            )}
          </div>
          <div className={styles.featureState2}>
            <Image
              src={Clan}
              width={270}
              height={260}
              onClick={() => handleClick("Feature 4")}
              alt=" "
            />
            {activeFeature === "Feature 4" && (
              <p className={styles.featureText4}>This is the text for Feature 3</p>
            )}
        </div>
      </div>
    </div>
  );
};
  
export default FeatureState;
  