import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/products`);

      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error("Failed to fetch products");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ml-62 min-h-screen bg-slate-700 p-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">All Products</h2>
          <p className="mt-1 text-sm text-slate-400">
            {loading ? "Loading..." : `${products.length} product${products.length === 1 ? "" : "s"} total`}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center rounded-xl border border-slate-600 bg-slate-800 py-20">
          <p className="text-sm text-slate-400">Loading products...</p>
        </div>
      ) : products.length === 0 ? (
        <div className="flex items-center justify-center rounded-xl border border-slate-600 bg-slate-800 py-20">
          <p className="text-sm text-slate-400">No products found.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-600 bg-slate-800 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-600 bg-slate-800/80">
                  <th className="px-5 py-3.5 text-left font-medium text-slate-400">Product</th>
                  <th className="px-5 py-3.5 text-left font-medium text-slate-400">Category</th>
                  <th className="px-5 py-3.5 text-left font-medium text-slate-400">Sizes</th>
                  <th className="px-5 py-3.5 text-left font-medium text-slate-400">Price</th>
                  <th className="px-5 py-3.5 text-left font-medium text-slate-400">Stock</th>
                  <th className="px-5 py-3.5 text-left font-medium text-slate-400">Status</th>
                  <th className="px-5 py-3.5 text-right font-medium text-slate-400">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {products.map((product) => (
                  <tr key={product._id} className="group transition-colors hover:bg-slate-700/60">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.productImage}
                          alt={product.title}
                          className="h-20 w-18 shrink-0 rounded-lg border border-slate-600 object-cover"
                        />
                        <div className="min-w-0">
                          <p className="truncate font-medium text-white">{product.title}</p>
                          <p className="text-xs text-slate-400">#{product.productCode}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-3.5">
                      <span className="inline-flex rounded-full bg-indigo-500/20 px-2.5 py-1 text-xs font-medium text-indigo-300">
                        {product.category}
                      </span>
                    </td>

                    <td className="px-5 py-3.5">
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.map((size) => (
                          <span
                            key={size}
                            className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-slate-600 text-xs font-medium text-slate-300"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="px-5 py-3.5 font-medium text-white">
                      ₹{product.price.toLocaleString("en-IN")}
                    </td>

                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                          product.inStock ? "text-emerald-400" : "text-red-400"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            product.inStock ? "bg-emerald-400" : "bg-red-400"
                          }`}
                        />
                        {product.inStock ? "In stock" : "Out of stock"}
                      </span>
                    </td>

                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          product.status === "Published"
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-amber-500/20 text-amber-300"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>

                    <td className="px-5 py-3.5 text-right">
                      <button className="rounded-md px-2.5 py-1 text-xs font-medium text-slate-400 opacity-0 transition-opacity hover:bg-red-500/20 hover:text-red-300 group-hover:opacity-100">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;