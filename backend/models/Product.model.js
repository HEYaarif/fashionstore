const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title:       { type: String, required: [true, 'Title is required'], trim: true },
    description: { type: String, trim: true },
    productCode: { type: String, required: [true, 'Product code is required'], unique: true, trim: true },
    price:       { type: Number, required: [true, 'Price is required'] },
    inStock:     { type: Boolean, default: true },
    sizes:       { type: [String], default: [] },
    gender:      { type: String, enum: ['Male', 'Female', 'Kids'], required: true },
    category:    { type: String, required: true },
    tags:        { type: [String], default: [] },
    status:      { type: String, enum: ['Published', 'Draft'], default: 'Published' },
    productImage:   { type: String, default: null },
    galleryImages:  { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);