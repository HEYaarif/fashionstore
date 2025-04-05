import React, { useState } from 'react'
import style from "../Payment/Payment.module.css"


const Payment = () => {
    const [selectedPayment, setSelectedPayment] = useState("creditCard");

    return (
        <div className={style.maincontainer}>
      <div className={style.container}>
        <h2 className={style.heading}>Payment Details</h2>
  
        <div className={style.paymentOptions}>
          <button
            className={`${style.razorpay} ${selectedPayment === "razorpay" ? style.active : ""}`}
            onClick={() => setSelectedPayment("razorpay")}>Razorpay</button>
  
          <button
            className={`${style.gpay} ${selectedPayment === "gpay" ? style.active : ""}`}
            onClick={() => setSelectedPayment("gpay")}>G Pay</button>
            
        </div>
  
        <p className={style.orText}>or checkout using a credit/debit card</p>
  
        {selectedPayment === "razorpay" ? (
          <div className={style.razorpayContent}>
            <p>Redirecting to Razorpay for secure payment...</p>
            <button className={style.continueBtn}>Continue with Razorpay</button>
          </div>
        ) : selectedPayment === "gpay" ? (
          <div className={style.gpayContent}>
            <p>Use Google Pay for a fast and secure checkout.</p>
            <button className={style.continueBtn}>Continue with G Pay</button>
          </div>
        ) : (
          <div className={style.cardForm}>
            <label>Cardholder Name</label>
            <input type="text" placeholder="Cardholder Name" />
  
            <label>Card Number</label>
            <input type="text" placeholder="4111 1111 1111 1111" />
  
            <div className={style.row}>
              <div>
                <label>Expiration</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div>
                <label>CVV</label>
                <input type="text" placeholder="123" />
              </div>
            </div>
  
            <label>Postal Code</label>
            <input type="text" placeholder="Postal or ZIP code" />
            <button className={style.paymentbutton}>Pay Now</button>
          </div>
        )}
      </div>
      </div>
    );
}

export default Payment
