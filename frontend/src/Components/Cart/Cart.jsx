import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../Cart/Cart.module.css";
import bagimg from "../../assets/cartbag.webp";
import { useCart } from "../Context/Cartcontext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();

  // Manage quantity for each product individually
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  // Increment quantity for a specific product
  const increment = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] < 10 ? prev[id] + 1 : 10,
    }));
  };

  // Decrement quantity for a specific product
  const decrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = parseInt(item.Price.replace("INR: ", "").replace(",", "")) || 0;
    return total + itemPrice * (quantities[item.id] || 1);
  }, 0);

  const deliveryCharge = totalPrice > 2000 ? 0 : 40; // Free delivery if price > 500
  const finalAmount = totalPrice + deliveryCharge;

  return (
    <div className={style.maincontainer}>
      {cart.length === 0 ? (
        <div className={style.carthidcontainer}>
          <img src={bagimg} alt="bag" />
          <h3>Hey, it feels so light!</h3>
          <p>There is nothing in your bag. Let's add some items.</p>
          <button onClick={() => navigate("/product")}>Shop Now</button>
        </div>
      ) : (
        <>
          <div className={style.leftside}>
            {cart.map((item) => {
              const itemPrice =
                parseInt(item.Price.replace("INR: ", "").replace(",", "")) || 0;
              return (
                <div key={item.id} className={style.cartItem}>
                  <div className={style.content}>
                    <div className={style.productImage}>
                      <img src={item.image} alt="product" />
                    </div>

                    <div className={style.productcontent}>
                      <h3>{item.name}</h3>
                      <p>{item.Price}</p>
                      <p>Size: {item.selectedSize}</p>
                    </div>
                  </div>

                  <div className={style.extradetails}>
                    <button onClick={() => decrement(item.id)}>-</button>
                    <h3>{quantities[item.id]}</h3>
                    <button onClick={() => increment(item.id)}>+</button>
                    <p>SAVE FOR LATER</p>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={style.rightside}>
            <div className={style.calculationconstainer}>
              <h3>PRICE DETAILS ({cart.length} Items)</h3>
              <p>
                Total Price <span>₹{totalPrice}</span>
              </p>
              <p>
                Delivery Charges{" "}
                <span style={{ color: deliveryCharge === 0 ? "green" : "black" }}>
                  {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                </span>
              </p>
              <hr />
              <h4>
                Total Amount <span>₹{finalAmount}</span>
              </h4>
              <button className={style.placeorderBtn} onClick={()=> navigate('/address')}>PLACE ORDER</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
