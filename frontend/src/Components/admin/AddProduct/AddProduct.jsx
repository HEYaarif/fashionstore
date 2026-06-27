import React, { useState } from 'react';

const AddProduct = () => {
  const [inStock, setInStock] = useState(true);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const inputClass =
    'w-full px-2.5 py-2.5 rounded bg-[#0d1117] border border-[#30363d] text-[#ccc] outline-none focus:border-[#4c4cff] transition-colors';

  return (
    <div className="ml-62 p-5 bg-[#0d1117] min-h-screen text-[#ccc]">
      <h2 className="text-2xl text-[#bfbfbf] mb-5 font-semibold">Add Product</h2>

      <form className="flex gap-5 flex-wrap">
        {/* Left Section */}
        <div className="flex-1 min-w-72 bg-[#161b22] p-5 rounded-xl">

          {/* Product Title */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Product Title</label>
            <input type="text" placeholder="Enter Product Title" className={inputClass} />
          </div>

          {/* Product Description */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Product Description</label>
            <textarea
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
              className="mt-2 text-[#ccc] file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-[#2d2d3a] file:text-[#ccc] file:cursor-pointer hover:file:bg-[#4c4cff] file:transition-colors"
            />
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
            <input type="text" placeholder="Enter Product Code" className={inputClass} />
          </div>

          {/* Price */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Price</label>
            <input type="text" placeholder="e.g. INR: 1,499" className={inputClass} />
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
                  <input type="radio" name="gender" className="accent-[#6c5ce7]" />
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
            <select className={inputClass}>
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
              placeholder="Enter tags separated by commas"
              className={inputClass}
            />
          </div>

          {/* Status */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-[#b0b0b0]">Status</label>
            <select className={inputClass}>
              <option>Published</option>
              <option>Draft</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-5 w-full py-3 bg-[#4c4cff] text-white text-base font-bold border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-[#3a3ad6]"
          >
            Submit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;