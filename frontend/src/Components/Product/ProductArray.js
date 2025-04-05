import jeans1 from "../../assets/jeans1.webp"
import jeans2 from "../../assets/jeans2.webp"
import jeans3 from "../../assets/jeans3.webp"
import jeans4 from "../../assets/jeans4.webp"
import shirts1 from "../../assets/shirts1.webp"
import shirts2 from "../../assets/shirts2.webp"
import shirts3 from "../../assets/shirts3.webp"
import shirts4 from "../../assets/shirts4.webp"
import tshirt1 from "../../assets/tshirt1.webp"
import tshirt2 from "../../assets/tshirt2.webp"
import tshirt3 from "../../assets/tshirt3.webp"
import tshirt4 from "../../assets/tshirt4.webp"


let ProductArray = [
    {id:1, category: "jeans", name:"Navy Mid Rise Baggy Fit jeans", image: jeans1, Price:"INR: 1,499", Size:"Size: 28 30 32 34", description:"Classic navy baggy jeans with a comfortable mid-rise fit, made from durable fabric for everyday casual wear and all-day comfort."},
    {id:2, category: "jeans", name:"Navy Mid Rise Bootcut jeans", image: jeans2, Price:"INR: 1,699", Size:"Size: 28 30 32 34", description:"Trendy bootcut jeans offering a modern look with a flattering mid-rise waist, ideal for styling with sneakers or boots."},
    {id:3, category: "jeans", name:"Navy Mid Rise Bootcut jeans", image: jeans3, Price:"INR: 1,599", Size:"Size: 28 30 32 34", description:"Stylish bootcut jeans with premium stretch denim, designed for casual and semi-formal outfits with superior comfort."},
    {id:4, category: "jeans", name:"Snitch Revolution Blue Baggy jeans", image: jeans4, Price:"INR: 1,299", Size:"Size: 28 30 32 34", description:"Relaxed-fit blue denim jeans with a retro-inspired baggy cut, perfect for a laid-back yet stylish appearance."},
    {id:5, category: "jeans", name:"Snitch Revolution Blue Baggy jeans", image: jeans4, Price:"INR: 1,299", Size:"Size: 28 30 32 34", description:"Casual blue baggy-fit jeans with a contemporary design, perfect for pairing with oversized t-shirts or hoodies."},
    {id:6, category: "jeans", name:"Navy Mid Rise Baggy Fit jeans", image: jeans1, Price:"INR: 1,499", Size:"Size: 28 30 32 34", description:"Everyday navy mid-rise jeans offering both style and comfort, featuring a breathable fabric and a relaxed cut."},
    {id:7, category: "jeans", name:"Navy Mid Rise Bootcut jeans", image: jeans2, Price:"INR: 1,699", Size:"Size: 28 30 32 34", description:"Bootcut navy jeans designed for a sleek yet relaxed silhouette, suitable for both casual and dressy occasions."},
    {id:8, category: "jeans", name:"Snitch Revolution Blue Baggy jeans", image: jeans3, Price:"INR: 1,299", Size:"Size: 28 30 32 34", description:"Classic blue baggy-fit jeans with a modern touch, made from high-quality denim for long-lasting wear."},

    {id:9, category: "shirts", name:"Peach Printed Oversized Fit Shirt", image: shirts1, Price:"INR: 1,499", Size:"Size: S M L XL XXL", description:"A peach oversized shirt with bold prints, crafted from breathable fabric for a lightweight and trendy feel."},
    {id:10, category: "shirts", name:"White Textured Oversized Fit Shirt", image: shirts2, Price:"INR: 1,399", Size:"Size: S M L XL XXL", description:"Crisp white textured oversized shirt with a unique pattern, adding a touch of sophistication to your wardrobe."},
    {id:11, category: "shirts", name:"Grey Textured Oversized Fit Shirt", image: shirts3, Price:"INR: 1,599", Size:"Size: S M L XL XXL", description:"Soft grey textured shirt offering both comfort and contemporary style, ideal for layering over tees or wearing solo."},
    {id:12, category: "shirts", name:"White Self-Design Slim Fit Shirt", image: shirts4, Price:"INR: 1,299", Size:"Size: S M L XL XXL", description:"Sophisticated slim-fit white shirt with a subtle self-design pattern, perfect for formal and semi-formal occasions."},
    {id:13, category: "shirts", name:"White Self-Design Slim Fit Shirt", image: shirts4, Price:"INR: 1,299", Size:"Size: S M L XL XXL", description:"Elegant white self-design slim-fit shirt featuring a stylish collar and breathable material for all-day comfort."},
    {id:14, category: "shirts", name:"Grey Textured Oversized Fit Shirt", image: shirts3, Price:"INR: 1,599", Size:"Size: S M L XL XXL", description:"Trendy grey textured oversized shirt ideal for layering and styling, adding a modern touch to any outfit."},
    {id:15, category: "shirts", name:"White Textured Oversized Fit Shirt", image: shirts2, Price:"INR: 1,399", Size:"Size: S M L XL XXL", description:"A classic white oversized shirt with textured fabric, offering a versatile option for casual or semi-formal looks."},
    {id:16, category: "shirts", name:"Peach Printed Oversized Fit Shirt", image: shirts1, Price:"INR: 1,499", Size:"Size: S M L XL XXL", description:"A vibrant peach-printed oversized shirt for a casual, trendy appearance, made with high-quality soft cotton fabric."},
    
    {id:17, category: "tshirts", name:"Snitch Revolution Fearless Black Printed Oversized T-Shirt", image: tshirt1, Price:"INR: 1,299", Size:"Size: S M L XL XXL", description:"Oversized black t-shirt with bold fearless prints, crafted from soft fabric for ultimate comfort and style."},
    {id:18, category: "tshirts", name:"Nightmare Vision Beige Oversized Fit T-Shirt", image: tshirt2, Price:"INR: 1,199", Size:"Size: S M L XL XXL", description:"Edgy beige oversized t-shirt featuring a unique nightmare vision print, offering a relaxed and stylish fit."},
    {id:19, category: "tshirts", name:"Core Lab Olive Slim Fit Knitted Polo T-Shirt", image: tshirt3, Price:"INR: 1,399", Size:"Size: S M L XL XXL", description:"Stylish olive slim-fit polo t-shirt with a soft knitted texture, perfect for casual and smart-casual occasions."},
    {id:20, category: "tshirts", name:"Dark Maroon Technical Stitchless Polo T-Shirt", image: tshirt4, Price:"INR: 1,499", Size:"Size: S M L XL XXL", description:"A modern maroon polo t-shirt crafted with stitchless technology, ensuring a clean and sophisticated look."},
    {id:21, category: "tshirts", name:"Dark Maroon Technical Stitchless Polo T-Shirt", image: tshirt4, Price:"INR: 1,499", Size:"Size: S M L XL XXL", description:"Minimalist dark maroon polo t-shirt with high-quality breathable fabric, designed for both casual and formal styling."},
    {id:22, category: "tshirts", name:"Core Lab Olive Slim Fit Knitted Polo T-Shirt", image: tshirt3, Price:"INR: 1,399", Size:"Size: S M L XL XXL", description:"Olive slim-fit polo t-shirt, featuring a modern design and a comfortable, durable fabric blend."},
    {id:23, category: "tshirts", name:"Snitch Revolution Fearless Black Printed Oversized T-Shirt", image: tshirt1, Price:"INR: 1,299", Size:"Size: S M L XL XXL", description:"Bold black oversized t-shirt with unique print, offering a relaxed fit and soft-touch fabric for ultimate comfort."},
    {id:24, category: "tshirts", name:"Nightmare Vision Beige Oversized Fit T-Shirt", image: tshirt2, Price:"INR: 1,199", Size:"Size: S M L XL XXL", description:"Trendy oversized beige t-shirt with a visually striking graphic design, perfect for streetwear fashion."},
]

export default ProductArray;



