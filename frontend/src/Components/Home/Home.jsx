import React from "react";
import Slider from "react-slick";
import style from "../Home/Home.module.css";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../Cards/Cards.jsx";
import suit from "../../assets/suits.jpg";
import shirts from "../../assets/shirts.webp";
import tshirt from "../../assets/tshirt.webp";
import kurta from "../../assets/kurta.webp";
import Product from "../Product/Product.jsx";
import perfume from "../../assets/perfume.jpg";
import perfume2 from "../../assets/perfume2.jpg";
import perfume3 from "../../assets/perfume3.jpg";
import watch1 from "../../assets/watch1.jpg";
import watch2 from "../../assets/watch2.jpg";
import AccessorieCard from "../Accessorie/AccessorieCard.jsx";
import ProductArray from "../Product/ProductArray";
import { useNavigate } from "react-router-dom";


const Home = ({ searchTerm }) => {
  const navigate = useNavigate();
  console.log("ProductArray:", ProductArray);

  const normalizedSearchTerm = searchTerm.replace(/[-\s]/g, "").toLowerCase();
  const filteredProducts = ProductArray.filter((product) =>{
    // product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const normalizedProductName = product.name.replace(/[-]/g, "").toLowerCase();
    return normalizedProductName.includes(normalizedSearchTerm);

});

  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // fade: true,
    adaptiveHeight: true,
    // arrows: false,
    appendDots: (dots) => (
      <div className={style.dotsContainer}>
        <ul>{dots}</ul>
      </div>
    ),
  };

  return (
    <>
      {searchTerm ? (
        <div className={style.productSection}>
          <div className={style.productGrid}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                 <div className={style.productcard}>
                  <img src={product.image} alt="product"  onClick={()=>navigate(`details/${product.id}`)}/>
                   <p key={product.id}>{product.name}</p>
                   <p>{product.Price}</p>
                   <p>{product.Size}</p>
                 </div>
              ))
            ) : (
              <p className={style.notfound}>No Products Found </p>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className={style.sliderContainer}>
            <Slider {...settings}>
              <div className={style.slide}>
                <img src={image1} alt="Fashion 1" />
              </div>
              <div className={style.slide}>
                <img src={image2} alt="Fashion 2" />
              </div>
              <div className={style.slide}>
                <img src={image3} alt="Fashion 3" />
              </div>
              <div className={style.slide}>
                <img src={image4} alt="Fashion 4" />
              </div>
            </Slider>
          </div>

          <div className={style.cardheading}>
            <h1>TRENDING NOW</h1>
            <p>
              "Turn heads with the hottest trending clothes that redefine
              style!"
            </p>

            <div className={style.cardimage}>
              <Cards bgImg={suit} head="Suits" paragraph="Designer" />
              <Cards bgImg={shirts} head="Shirts" paragraph="Summer" />
              <Cards bgImg={tshirt} head="T-Shirts" paragraph="Versatile" />
              <Cards bgImg={kurta} head="Jacket" paragraph="Styles" />
            </div>
          </div>

          <Product />

          <h1 style={{ textAlign: "center", padding: "15px" }}>
            FEATURES PRODUCT
          </h1>
          <p style={{ textAlign: "center" }}>
            ✨ Unleash luxury with our top-selling fragrance – long-lasting and
            crafted to perfection! 💖 Shop now and elevate your style with a
            scent that turns heads!
          </p>

          <AccessorieCard
            image1={perfume3}
            image2={perfume}
            image3={perfume2}
            head="PERFUME"
            paragraph="Perfume is more than just a fragrance; it’s an invisible accessory that enhances your personality, boosts confidence, and leaves a lasting impression."
            list="✨ First Impressions Matter – A captivating scent can leave a remarkable impact."
            list2="💖 Emotional Connection – Fragrances evoke memories, feelings, and deep emotions."
            list3="🔥 Boosts Confidence – Wearing the right perfume can make you feel empowered and irresistible."
            list4="🌟 Defines Your Personality – Whether bold, playful, or mysterious, your scent speaks for you."
            watch1={watch1}
            watch2={watch2}
            head_b="WATCH"
            paragraph1="A watch is more than just a timepiece—it’s a statement of style, sophistication, and success."
            list_b="✨ Symbol of Elegance – A luxury watch exudes class and prestige."
            list_b1="🔥 Boosts Confidence – Wearing a stunning watch enhances your look and presence."
            list_b2="⏳ Perfect for Every Occasion – From business meetings to casual outings, it completes your outfit."
            list_b3="🎁 A Timeless Gift – A watch is a meaningful and lasting expression of love and appreciation."
          />
        </>
      )}
    </>
  );
};

export default Home;
