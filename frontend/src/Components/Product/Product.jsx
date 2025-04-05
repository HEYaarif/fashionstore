import React, { useState } from "react";
import { BrowserRouter as Link, useNavigate } from "react-router-dom";
import style from "../Product/Product.module.css";
import ProductArray from "./ProductArray";


const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("jeans");
  const [show, setShow] = useState(4);
  const navigate = useNavigate();

  const filteredProducts = ProductArray.filter(
    (item) => item.category === selectedCategory
  );

  function ShowMore() {
    setShow((prevCount) => prevCount + 4);
  }
  return (
    <>

      <div className={style.mainProduct}>
        <button onClick={() => { setSelectedCategory("jeans"); setShow(4); }}>JEANS</button>
        <button onClick={() => { setSelectedCategory("shirts"); setShow(4); }}>SHIRTS</button>
        <button onClick={() => { setSelectedCategory("tshirts"); setShow(4); }}>T-SHIRTS</button>
      </div>

      <div className={style.ProductCard}>
        {filteredProducts.slice(0, show).map((item) => (
          <div key={item.id} className={style.imageCard}>
            <img src={item.image} alt="product"  onClick={()=>navigate(`details/${item.id}`)} />
            <p>{item.name}</p>
            <p>{item.Price}</p>
            <p style={{ fontSize: "14px", color: "gray" }}>{item.Size}</p>
           
          </div>
        ))}
      </div>

      <div className={style.viewAll}>
        {show < filteredProducts.length && (
          <button onClick={ShowMore}>Show More</button>
        )}
      </div>
    </>
  );
};

export default Product;
