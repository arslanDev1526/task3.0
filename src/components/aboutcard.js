
import React from "react";
import styles from "./about.module.css";

const AboutCard = ({ imgSrc, description }) => {
    return (
      <div className={styles["about-content"]}>
        <p>{description}</p>
        <div>
          <img className={styles["about-img"]} src={imgSrc} alt="About" />
        </div>
      </div>
    );
  };

  export default AboutCard;