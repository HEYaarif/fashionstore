import React from 'react'
import AccessorieCard from './AccessorieCard'
import perfume from "../../assets/perfume.jpg";
import perfume2 from "../../assets/perfume2.jpg";
import perfume3 from "../../assets/perfume3.jpg";
import watch1 from "../../assets/watch1.jpg"
import watch2 from "../../assets/watch2.jpg"


const Accessorie = () => {
  return (
  <>
     <h1 style={{textAlign:"center", padding:"15px"}}>FEATURES PRODUCT</h1>
        <p style={{textAlign:"center"}}>
          ✨ Unleash luxury with our top-selling fragrance – long-lasting and
          crafted to perfection! 💖 Shop now and elevate your style with a scent
          that turns heads!
        </p>
       <AccessorieCard
        image1={perfume3}
        image2={perfume}
        image3={perfume2}
        head="PERUME"
        paragraph="Perfume is more than just a fragrance; it’s an invisible accessory that enhances your personality, boosts confidence, and leaves a lasting impression. A single spritz can turn heads, ignite emotions, and make you unforgettable. Each fragrance tells a unique story, with top notes that create the first impression, heart notes that define its character, and base notes that linger long after application."
        list="✨ First Impressions Matter – A captivating scent can leave a remarkable impact."
        list2="💖 Emotional Connection – Fragrances evoke memories, feelings, and deep emotions."     
        list3="🔥 Boosts Confidence – Wearing the right perfume can make you feel empowered and irresistible."
        list4="🌟 Defines Your Personality – Whether bold, playful, or mysterious, your scent speaks for you."


        watch1={watch1}
        watch2={watch2}
        head_b="WATCH"
        paragraph1="A watch is more than just a timepiece—it’s a statement of style, sophistication, and success. Whether classic, sporty, or smart, the right watch enhances your personality and leaves a lasting impression. A watch is more than just a device to tell time—it’s a symbol of elegance, precision, and personality. Whether you prefer a classic analog watch, a modern smartwatch."
        list_b="✨ Symbol of Elegance – A luxury watch exudes class and prestige."
        list_b1="🔥 Boosts Confidence – Wearing a stunning watch enhances your look and presence."     
        list_b2="⏳ Perfect for Every Occasion – From business meetings to casual outings, it completes your outfit."
        list_b3="🎁 A Timeless Gift – A watch is a meaningful and lasting expression of love and appreciation."

        />  
  </>
  )
}

export default Accessorie
