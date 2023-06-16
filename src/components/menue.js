import React from 'react'
import styles from './meneu.module.css';
import MenuCard from './menuecard';

const Menue = () => {
    const menuItems = [
      {
        imgUrl:
          'https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=800&height=800',
        title: 'Pizza',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In earum sit enim quasi consequatur vero.',
        price: '2000',
      },
      {
        imgUrl:
          'https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=800&height=800',
        title: 'Pizza',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In earum sit enim quasi consequatur vero.',
        price: '2000',
      },
      {
        imgUrl:
          'https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=800&height=800',
        title: 'Pizza',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In earum sit enim quasi consequatur vero.',
        price: '2000',
      },
      {
        imgUrl:
          'https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=800&height=800',
        title: 'Pizza',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In earum sit enim quasi consequatur vero.',
        price: '2000',
      },
      {
        imgUrl:
          'https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=800&height=800',
        title: 'Pizza',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In earum sit enim quasi consequatur vero.',
        price: '2000',
      },
      {
        imgUrl:
          'https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=800&height=800',
        title: 'Pizza',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In earum sit enim quasi consequatur vero.',
        price: '2000',
      },
    ];
  
    return (
<>
      <h1 className={styles.menu}> Menu </h1>
      <section id={styles.menue}>
       

        {menuItems.map((item, index) => (
          <MenuCard
            key={index}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </section>
      </>
    );
  };
  
  export default Menue;