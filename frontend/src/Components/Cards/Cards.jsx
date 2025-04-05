import React from "react";
import style from "../Cards/Cards.module.css";

const Cards = ({ bgImg, head, paragraph }) => {
  return (
    <div className={style.cards} style={{ backgroundImage: `url(${bgImg})` }}>
      <div className={style.overlay}>
        <h1>{head}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Cards;
