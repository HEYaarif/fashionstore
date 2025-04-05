import React, { useEffect, useState } from "react";
import style from "../Addtocard/AddtoCard.module.css";
import ProductArray from "../Product/ProductArray";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../Context/Cartcontext";

const AddtoCard = () => {
  let { id } = useParams();
  const { addToCart, updateQuantity } = useCart();
  let [card, setCard] = useState(null);
  let [count,setCount] = useState(1)

  useEffect(() => {
    console.log(id);

    let filteredcardProduct = ProductArray.find((ele) => ele.id == id);
    setCard(filteredcardProduct);
    console.log(filteredcardProduct);
  }, [id]);

  let increment = ()=>{
    setCount((prevcount)=> prevcount < 10 ? prevcount + 1 : 10)
  }
  let decrement = ()=>{
    setCount((prevcount)=> (prevcount > 1 ? prevcount -1 : 1))
  }
  
  useEffect(() => {
    if (card) updateQuantity(card.id, count);
  }, [count]);

  return (
    <>
    <div className={style.maincontainer}>
      <div className={style.leftcontainer}>
        {card ? <h3>{card.name}</h3> : <p>Loading...</p>}
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
</>
  );
};

export default AddtoCard;
