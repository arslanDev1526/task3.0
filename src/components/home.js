import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <section id={styles.home}>
     <div className={styles["img-div"]}>
        <img
          className={styles["hero-img"]}
          src="https://thumbs.dreamstime.com/b/bacon-cheese-burger-beef-patty-tomato-onion-pizza-mozzarella-ham-tomatoes-salami-pepper-pepperoni-spices-fresh-basil-123768697.jpg"
          alt="Girl in a jacket"
        />
      </div>
    </section>
  );
}

export default Home;
