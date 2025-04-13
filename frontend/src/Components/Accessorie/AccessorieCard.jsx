import React from "react";
import style from "./AccessorieCard.module.css";

const AccessorieCard = ({
  image2,
  image3,
  watch1,
  watch2,
  head,
  head_b,
  paragraph,
  paragraph1,
  list,
  list2,
  list3,
  list4,
  list_b,
  list_b1,
  list_b2,
  list_b3,
}) => {
  return (
    <>
      <div className={style.mainAccessoriecard}>
        <div className={style.Accessoriecard}>
          <div className={style.Accessorie}>
            <h2>{head}</h2>
            <p>{paragraph}</p>
            <br />
            <ul>
              <li>{list}</li>
              <li>{list2}</li>
              <li>{list3}</li>
              <li>{list4}</li>
            </ul>
          </div>
          <div className={style.accessorieImage}>
          <img src={image2} alt="perfum2" />
          <img src={image3} alt="perfume3" />
          </div>
        </div>

        <div className={style.Accessoriecard}>

        <div className={style.accessorieImage}>
          <img src={watch1} alt="watch" />
          <img src={watch2} alt="watch" />
          </div>
          <div className={style.Accessorie}>
            <h2>{head_b}</h2>
            <p>{paragraph1}</p>
            <br />
            <ul>
              <li>{list_b}</li>
              <li>{list_b1}</li>
              <li>{list_b2}</li>
              <li>{list_b3}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessorieCard;
