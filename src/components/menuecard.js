import React from "react";
import styles from "./meneu.module.css";

const MenuCard = ({ imgUrl, title, description, price }) => {
  return (
    <>
      <div className={styles.card}>
        <div>
          <img className={styles["menu-img"]} src={imgUrl} alt={title} />
        </div>
        <div className={styles["menu-text"]}>
          <h2>{title}</h2>
          <p >{description}</p>
          <h3>RS: {price}</h3>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
