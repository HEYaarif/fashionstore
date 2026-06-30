const Customer = require('../models/prod.models')
const Address = require('../models/add.model')
const encrypData = require('../utils/encryData')
const compareEncryptedData = require('../utils/compareEncdata')
const Product = require('../models/Product.model');
const upload = require('../middleware/upload');
const { uploadOnCloudinary } = require('../utils/cloudinary.js')

//* Signup data
let signup = async (req, res, next) => {
    try {
        let { name, number, email, password, profile } = req.body
        console.log(req.body)

        let isCustomer = await Customer.findOne({ $or: [{ number }, { email }] })

        if (isCustomer) {
            return res.status(409).json({ error: true, message: "Customer Already exists with given number and email", data: null })
        }

        let hashedPassword = await encrypData(password)

        let customer = await Customer.create({ name, number, email, password : hashedPassword, profile })
        res.status(200).json({ error: false, message: "Signup Successfully", data: customer })

    } catch (err) {
        next(err)

    }
}

//* Login data
let login = async (req, res, next) => {
    try {
        let { username, password } = req.body
        console.log(req.body)

        let isCustomer = await Customer.findOne({ $or: [{ number: username }, { email: username }] })

        if (isCustomer) {
            let isPassword = await compareEncryptedData(password, isCustomer.password)

            if (isPassword) {
                return res.status(200).json({ error: false, message: "Login Successfully", data: {profile:isCustomer.profile, name:isCustomer.name, email:isCustomer.email} })
            }
            return res.status(401).json({ error: true, message: "Password Not Matching" })
        }

        return res.status(401).json({ error: true, message: "User Not Found" })

    } catch (err) {
        next(err)
    }
}

let address = async (req, res, next) => {
    try {
        let { name, number, pinCode, address, locality } = req.body
        console.log(req.body)

        const isCustomer = await Customer.findOne({ number })

        if (isCustomer) {
            res.status(409).json({ error: true, message: "Customer already exits with given number", data: null })
        }

        let newAddress = await Address.create({ name, number, pinCode, address, locality, customerId:Customer._id })
        res.status(200).json({ error: false, message: "Address created successfully", data: newAddress })


    } catch (err) {
        next(err)

    }
}

let getAccount = async (req, res, next) => {
    try {
        let { email, number } = req.query  // pass email or number as query param

        let customer = await Customer.findOne(
            { $or: [{ email }, { number }] },
            { password: 0 }  // exclude password from response
        )

        if (!customer) {
            return res.status(404).json({ error: true, message: "Customer Not Found", data: null })
        }

        return res.status(200).json({ error: false, message: "Account data fetched successfully", data: customer })

    } catch (err) {
        next(err)
    }
}


// POST /api/v1/products

const addProduct = async (req, res) => {
  try {
     console.log('req.body:', req.body);   // ← add this
     console.log('req.files:', req.files); // ← add this
    const {
      title, description, productCode,
      price, inStock, sizes, gender,
      category, tags, status,
    } = req.body;

    const parsedSizes = sizes ? JSON.parse(sizes) : [];
    const parsedTags  = tags
      ? tags.split(',').map((t) => t.trim()).filter(Boolean)
      : [];

    // ✅ Upload main image to Cloudinary
    let productImageUrl = null;
    if (req.files?.productImage?.[0]) {
      const uploaded = await uploadOnCloudinary(req.files.productImage[0].path);
      productImageUrl = uploaded?.secure_url || null;
    }

    // ✅ Upload gallery images to Cloudinary
    let galleryUrls = [];
    if (req.files?.galleryImages?.length) {
      const uploads = await Promise.all(
        req.files.galleryImages.map((file) => uploadOnCloudinary(file.path))
      );
      galleryUrls = uploads
        .filter(Boolean)
        .map((res) => res.secure_url);
    }

    const product = await Product.create({
      title,
      description,
      productCode,
      price:         Number(price),
      inStock:       inStock === 'true',
      sizes:         parsedSizes,
      gender,
      category,
      tags:          parsedTags,
      status,
      productImage:  productImageUrl,   // ✅ Cloudinary URL
      galleryImages: galleryUrls,       // ✅ Cloudinary URLs
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'Product code already exists' });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/v1/products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


module.exports = { signup, login, address, getAccount, addProduct, getProducts  }

