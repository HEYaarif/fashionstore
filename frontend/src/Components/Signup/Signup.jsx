import React from 'react'
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const addpopup = (message) => toast(message)

  const onSubmit = async (data) => {
    console.log("Sending Data:", data)
    try {
      let response = await axios.post(`${import.meta.env.VITE_API_URL}/api/prod/signup`, data)
      addpopup(response.data.message)

      setTimeout(() => {
        if (data.profile === 'admin') {
          navigate('/admin')
        } else {
          navigate('/login')
        }
      }, 2000)
    } catch (err) {
      addpopup(err.response?.data?.message || "Signup failed");
      console.log("Error Response:", err.response?.data)
    }
  }

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h1 className="text-[#333] text-3xl font-bold mb-4 font-serif">Signup Now</h1>

      <div className="shadow-md rounded-xl p-8">
        <ToastContainer />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
            className="m-2 px-3 py-2 w-[360px] border border-gray-400 outline-none rounded-md focus:border-[#d89d00] transition-colors duration-300"
          />
          {errors.name && <span className="text-red-500 text-xs pl-3 -mt-1">{errors.name.message}</span>}

          <input
            type="number"
            placeholder="Enter your number"
            {...register("number", { required: "Phone number is required", minLength: { value: 10, message: "Number must be 10 digits" } })}
            className="m-2 px-3 py-2 w-[360px] border border-gray-400 outline-none rounded-md focus:border-[#d89d00] transition-colors duration-300"
          />
          {errors.number && <span className="text-red-500 text-xs pl-3 -mt-1">{errors.number.message}</span>}

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" } })}
            className="m-2 px-3 py-2 w-[360px] border border-gray-400 outline-none rounded-md focus:border-[#d89d00] transition-colors duration-300"
          />
          {errors.email && <span className="text-red-500 text-xs pl-3 -mt-1">{errors.email.message}</span>}

          <input
            type="password"
            placeholder="Enter your Password"
            {...register("password", { required: "Password is required" })}
            className="m-2 px-3 py-2 w-[360px] border border-gray-400 outline-none rounded-md focus:border-[#d89d00] transition-colors duration-300"
          />
          {errors.password && <span className="text-red-500 text-xs pl-3 -mt-1">{errors.password.message}</span>}

          <div className="flex flex-col">
            <select
              id="profile"
              {...register("profile", { required: "Profile is required" })}
              className="mx-2 my-2 px-2 py-2 text-sm border border-gray-400 rounded-md outline-none focus:border-[#d89d00] transition-colors duration-300"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            {errors.profile && <span className="text-red-500 text-xs pl-3 mt-1">{errors.profile.message}</span>}
          </div>

          <button
            type="submit"
            className="m-2 py-2 w-[360px] border-none rounded-md bg-[#f8b400] hover:bg-[#d89d00] text-white font-bold cursor-pointer transition-colors duration-300"
          >
            Sign Up
          </button>

        </form>

        <div className="mt-1 flex justify-center items-center flex-col">
          <p>
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="border-none bg-white text-[#f8b400] font-bold cursor-pointer hover:underline"
            >
              Log In
            </button>
          </p>

          <div className="flex items-center w-[90%] my-2">
            <hr className="flex-1 border-none border-t border-gray-300" />
            <span className="px-3 text-gray-400 text-sm">or</span>
            <hr className="flex-1 border-none border-t border-gray-300" />
          </div>

          <button
            type="button"
            className="w-[360px] py-2 border-none bg-white text-[#f8b400] font-bold cursor-pointer rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors duration-300"
          >
            <FcGoogle size={20} /> Sign up with Google
          </button>
        </div>

      </div>
    </div>
  )
}

export default Signup