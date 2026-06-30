import React, { useState } from 'react';
import axios from 'axios';

const INITIAL_FORM = {
  title: '',
  description: '',
  productCode: '',
  price: '',
  gender: '',
  category: 'Select',
  tags: '',
  status: 'Published',
};

const AddProduct = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [inStock, setInStock] = useState(true);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [productImage, setProductImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message }
  const [galleryPreviews, setGalleryPreviews] = useState([]);
  

  const inputClass =
    'w-full px-2.5 py-2.5 rounded bg-[#0d1117] border border-[#30363d] text-[#ccc] outline-none focus:border-[#4c4cff] transition-colors';

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setInStock(true);
    setSelectedSizes([]);
    setProductImage(null);
    setGalleryImages([]);
    setGalleryPreviews([]);
    // Reset file inputs
    document.querySelectorAll('input[type="file"]').forEach((el) => (el.value = ''));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.title.trim())       return showToast('error', 'Product title is required.');
    if (!form.productCode.trim()) return showToast('error', 'Product code is required.');
    if (!form.price.trim())       return showToast('error', 'Price is required.');
    if (!form.gender)             return showToast('error', 'Please select a gender.');
    if (form.category === 'Select') return showToast('error', 'Please select a category.');

    const formData = new FormData();
    formData.append('title',       form.title);
    formData.append('description', form.description);
    formData.append('productCode', form.productCode);
    formData.append('price',       form.price);
    formData.append('inStock',     inStock);
    formData.append('sizes',       JSON.stringify(selectedSizes));
    formData.append('gender',      form.gender);
    formData.append('category',    form.category);
    formData.append('tags',        form.tags);
    formData.append('status',      form.status);
    if (productImage) formData.append('productImage', productImage);
    galleryImages.forEach((file) => formData.append('galleryImages', file));

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/products`,
        formData
        // ✅ Don't set Content-Type — axios sets it automatically with boundary for FormData
      );

      if (data.success) {
        showToast('success', 'Product submitted successfully!');
        resetForm();
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to submit product.';
      showToast('error', msg);
    } finally {
      setLoading(false);
    }
  };

  const removeGalleryImage = (index) => {
  setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  setGalleryPreviews((prev) => prev.filter((_, i) => i !== index));
};

  return (
    <div className="ml-62 p-5 bg-[#0d1117] min-h-screen text-[#ccc]">

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-all duration-300 ${
            toast.type === 'success' ? 'bg-[#6c5ce7]' : 'bg-red-600'
          }`}
        >
          <span>{toast.type === 'success' ? '✓' : '✕'}</span>
          <span>{toast.message}</span>
        </div>
      )}

      <h2 className="text-2xl text-[#bfbfbf] mb-5 font-semibold">Add Product</h2>

      <form onSubmit={handleSubmit} className="flex gap-5 flex-wrap">

        {/* Left Section */}
        <div className="flex-1 min-w-72 bg-[#161b22] p-5 rounded-xl">

          {/* Product Title */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Product Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter Product Title"
              className={inputClass}
            />
          </div>

          {/* Product Description */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Product Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter product description here..."
              className={`${inputClass} h-24 resize-y`}
            />
          </div>

          {/* Product Image */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Product Image</label>
            <p className="text-sm text-[#888] mb-1">Add Product main Image.</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProductImage(e.target.files[0] || null)}
              className="mt-2 text-[#ccc] file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-[#2d2d3a] file:text-[#ccc] file:cursor-pointer hover:file:bg-[#4c4cff] file:transition-colors"
            />
          </div>

          {/* Product Gallery */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Product Gallery</label>
            <p className="text-sm text-[#888] mb-1">Add Product Gallery Images.</p>
            <input
              type="file"
              multiple
              accept="image/*"
              // onChange={(e) => setGalleryImages(Array.from(e.target.files))}
               onChange={(e) => {
  const newFiles = Array.from(e.target.files);
  setGalleryImages((prev) => [...prev, ...newFiles]);
  setGalleryPreviews((prev) => [
    ...prev,
    ...newFiles.map((f) => URL.createObjectURL(f)),
  ]);
  e.target.value = '';
}}
              className="mt-2 text-[#ccc] file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-[#2d2d3a] file:text-[#ccc] file:cursor-pointer hover:file:bg-[#4c4cff] file:transition-colors"
            />
            {galleryPreviews.length > 0 && (
  <div className="mt-3 flex flex-wrap gap-2">
    {galleryPreviews.map((src, i) => (
      <div key={i} className="relative">
        <img src={src} alt={`gallery-${i}`} className="w-20 h-20 object-cover rounded border border-[#30363d]" />
        <button
          type="button"
          onClick={() => removeGalleryImage(i)}
          className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
        >
          ×
        </button>
      </div>
    ))}
  </div>
)}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 min-w-72 bg-[#161b22] p-5 rounded-xl">

          {/* In Stock Toggle */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">In Stock</label>
            <label className="relative inline-block w-12 h-6 cursor-pointer">
              <input
                type="checkbox"
                checked={inStock}
                onChange={() => setInStock(!inStock)}
                className="opacity-0 w-0 h-0 absolute"
              />
              <span
                className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                  inStock ? 'bg-[#6c5ce7]' : 'bg-[#444]'
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                    inStock ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </span>
            </label>
          </div>

          {/* Product Code */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Product Code</label>
            <input
              type="text"
              name="productCode"
              value={form.productCode}
              onChange={handleChange}
              placeholder="Enter Product Code"
              className={inputClass}
            />
          </div>

          {/* Price */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Price</label>
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="e.g. INR: 1,499"
              className={inputClass}
            />
          </div>

          {/* Size */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Size</label>
            <div className="flex gap-2.5 mt-2 flex-wrap">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => toggleSize(size)}
                  className={`px-3.5 py-2 border rounded font-bold cursor-pointer transition-all duration-200 ${
                    selectedSizes.includes(size)
                      ? 'bg-[#4c4cff] border-[#4c4cff] text-white'
                      : 'bg-[#2d2d3a] border-[#555] text-white hover:bg-[#4c4cff] hover:border-[#4c4cff]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Gender</label>
            <div className="flex gap-4 mt-2 flex-wrap">
              {['Male', 'Female', 'Kids'].map((g) => (
                <label key={g} className="flex items-center gap-1.5 text-[#b0b0b0] cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={form.gender === g}
                    onChange={handleChange}
                    className="accent-[#6c5ce7]"
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">
              Category{' '}
              <span className="text-[#9f7aea] cursor-pointer ml-2 font-normal hover:underline">
                Add New
              </span>
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className={inputClass}
            >
              <option>Select</option>
              <option>Jeans</option>
              <option>Shirts</option>
              <option>T-Shirts</option>
            </select>
          </div>

          {/* Tags */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Tags</label>
            <input
              type="text"
              name="tags"
              value={form.tags}
              onChange={handleChange}
              placeholder="Enter tags separated by commas"
              className={inputClass}
            />
          </div>

          {/* Status */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className={inputClass}
            >
              <option>Published</option>
              <option>Draft</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-5 w-full py-3 text-white text-base font-bold border-none rounded-md cursor-pointer transition-colors duration-300 ${
              loading
                ? 'bg-[#3a3a8a] opacity-70 cursor-not-allowed'
                : 'bg-[#4c4cff] hover:bg-[#3a3ad6]'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Product'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;