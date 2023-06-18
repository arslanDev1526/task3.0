import React from "react";
import styles from "./aboutt.module.css";

const Aboutt = () => {
  return (
    <>
      <section id={styles.about}>
        <h1> About Us </h1>
        <div className={styles.about}> 

    
        <div className={styles["about-container"]}>
          <p  className={ styles["about-text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            molestias, aut quam, tenetur quod error, illo necessitatibus qui
            officiis obcaecati repellendus? Temporibus animi saepe, quasi non
            est architecto fugit mollitia natus exercitationem quod soluta
            consequatur alias molestias laboriosam nobis sunt facere velit.
          </p>
          <img className={ styles["about-img"]} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaxGobpPQSJ0zoZrBp0QGfjSv7IzWE6ye2A&usqp=CAU"/> 
          
        </div>

        <div className={styles["about-container"]}>
          <p className={ styles["about-text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            molestias, aut quam, tenetur quod error, illo necessitatibus qui
            officiis obcaecati repellendus? Temporibus animi saepe, quasi non
            est architecto fugit mollitia natus exercitationem quod soluta
            consequatur alias molestias laboriosam nobis sunt facere velit.
          </p>

          <img className={ styles["about-img"]} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaxGobpPQSJ0zoZrBp0QGfjSv7IzWE6ye2A&usqp=CAU"/> 
          
        </div>

        <div className={styles["about-container"]}>
          <p  className={ styles["about-text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            molestias, aut quam, tenetur quod error, illo necessitatibus qui
            officiis obcaecati repellendus? Temporibus animi saepe, quasi non
            est architecto fugit mollitia natus exercitationem quod soluta
            consequatur alias molestias laboriosam nobis sunt facere velit.
          </p>
          <img className={ styles["about-img"]} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaxGobpPQSJ0zoZrBp0QGfjSv7IzWE6ye2A&usqp=CAU"/> 
          
        </div>
        </div>
      </section>
    </>
  );
};

export default Aboutt;
