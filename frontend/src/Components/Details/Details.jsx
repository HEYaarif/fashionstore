import React, { useEffect, useState } from 'react'
import style from '../Details/Details.module.css'
import ProductArray from '../Product/ProductArray'
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { useCart } from '../Context/Cartcontext';

const Details = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  const {addToCart} = useCart();
  const [product,setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(()=>{
    console.log(id);
    
    let filteredProduct = ProductArray.find((ele)=> ele.id == id);
    setProduct(filteredProduct);
    // console.log(filteredProduct)
  },[id])

  const handleAddToCart = () => {
    console.log("add to cart clicked");
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }

    addToCart({ ...product, selectedSize });
    navigate("/cart");
  };

  return (
    <div className={style.detailscontainer}>
      <div className={style.subcontainer}>
      <div className={style.leftcontainer}>

      {<div className={style.subimage}>
        {product ? <img src={product.image} alt="image" /> : <p>Loading...</p>}
        {product ? <img src={product.image} alt="image" /> : <p>Loading...</p>}
        {product ? <img src={product.image} alt="image" /> : <p>Loading...</p>}
     </div>}

        {product ? <img src={product.image} alt="image" /> : <p>Loading...</p>}  
     </div>

     <div className={style.rigthcontainer}>
          {product ? (
            <>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <h3>{product.Price}</h3>
              <div className={style.icons}>
                <FaStar color="gold" size={20} />
                <FaStar color="gold" size={20} />
                <FaStar color="gold" size={20} />
                <FaStar color="gold" size={20} />
                <FaStar color=" #8b8383" size={20} />
                <p>121 reviews</p>
              </div>

              <div className={style.sizeContainer}>
                <h3 className={style.sizeHeading}>Size:</h3>
                <span>Select the size</span>
                <div className={style.sizeOptions}>
                {product.Size.replace("Size:", "").trim().split(" ").map((size, index) => (
                <span key={index} className={`${style.sizeBox} ${selectedSize === size ? style.selectedSize:""}`} onClick={()=>setSelectedSize(size)}>{size}</span>
                ))}
                </div>
              </div>

              <button onClick={handleAddToCart} className={!selectedSize ? style.disabledBtn:""}>Add to Cart</button>


              <button onClick={()=> navigate('/address')}>Buy Now</button>

            </>
          ) : (
            <p>Loading product details...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Details
