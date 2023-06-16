

import React from "react";
import styles from "./about.module.css";
import AboutCard from "./aboutcard";


const About = () => {
  const cards = [
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaxGobpPQSJ0zoZrBp0QGfjSv7IzWE6ye2A&usqp=CAU",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias, aut quam, tenetur quod error, illo necessitatibus qui officiis obcaecati repellendus? Temporibus animi saepe, quasi non est architecto fugit mollitia natus exercitationem quod soluta consequatur alias molestias laboriosam nobis sunt facere velit. A dolorem, temporibus mollitia eum sequi odit similique minima necessitatibus nulla voluptatum, nostrum voluptatibus expedita quaerat quam! Est obcaecati labore officia.",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaxGobpPQSJ0zoZrBp0QGfjSv7IzWE6ye2A&usqp=CAU",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias, aut quam, tenetur quod error, illo necessitatibus qui officiis obcaecati repellendus? Temporibus animi saepe, quasi non est architecto fugit mollitia natus exercitationem quod soluta consequatur alias molestias laboriosam nobis sunt facere velit. A dolorem, temporibus mollitia eum sequi odit similique minima necessitatibus nulla voluptatum, nostrum voluptatibus expedita quaerat quam! Est obcaecati labore officia.",
    },

    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaxGobpPQSJ0zoZrBp0QGfjSv7IzWE6ye2A&usqp=CAU",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias, aut quam, tenetur quod error, illo necessitatibus qui officiis obcaecati repellendus? Temporibus animi saepe, quasi non est architecto fugit mollitia natus exercitationem quod soluta consequatur alias molestias laboriosam nobis sunt facere velit. A dolorem, temporibus mollitia eum sequi odit similique minima necessitatibus nulla voluptatum, nostrum voluptatibus expedita quaerat quam! Est obcaecati labore officia.",
    },
  ];

  return (
    <section id={styles.about}>
      <h1>About Us</h1>
      {cards.map((card, index) => (
        <AboutCard
          key={index}
          imgSrc={card.imgSrc}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default About;
