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
      <div className={styles.featureState}>
        <div className={styles.featureState2}>
          <Image
            src={Sol}
            width={250}
            height={200}
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
            width={400}
            height={350}
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
            width={300}
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
            width={300}
            height={270}
            onClick={() => handleClick("Feature 4")}
            alt=" "
          />
          {activeFeature === "Feature 4" && (
            <p className={styles.featureText4}>This is the text for Feature 3</p>
          )}
        </div>
      </div>
    );
  };
  
  export default FeatureState;
  