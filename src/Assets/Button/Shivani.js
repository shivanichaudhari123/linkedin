import React from "react";
import Carousel from "react-elastic-carousel";
import {Cararray} from "./Cararray";
import styles from "./Shivani.module.css";
// <div key={item.i}>{item.image}</div>
const Shivani = () => {
  return (
    <>
      <div className={styles.shivani}>
        <Carousel>
          {Cararray.map((item, i) => (
            <img
              className={styles.images}
              key={i}
              src={item.image}
              alt="carlogo"
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default Shivani;
