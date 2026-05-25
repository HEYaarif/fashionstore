import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit,reset, formState: { errors } } = useForm();

  const addpopup = (message) => toast(message);

  let onSubmit = async (loginData) => {
    try {
      let response = await axios.post(`${import.meta.env.VITE_API_URL}/api/prod/login`, loginData);
      addpopup(response.data.message);
      reset();
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.log(err);
      addpopup(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[#333] text-3xl font-bold mb-4 font-serif">Login Now</h1>

      <ToastContainer autoClose={1000} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-[350px] text-center"
      >
        <div className="flex flex-col">

          <input
            type="text"
            placeholder="Enter your Number or Email"
            {...register('username', { required: "Number or email is required" })}
            className="w-full px-3 py-3 my-2 border border-gray-300 rounded-md text-base outline-none transition-all duration-300 focus:border-[#d89d00]"
          />
          {errors.username && <p className="text-red-500 text-sm -mt-1 mb-2 text-left">{errors.username.message}</p>}

          <input
            type="password"
            placeholder="Enter your Password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-3 py-3 my-2 border border-gray-300 rounded-md text-base outline-none transition-all duration-300 focus:border-[#d89d00]"
          />
          {errors.password && <p className="text-red-500 text-sm -mt-1 mb-2 text-left">{errors.password.message}</p>}

          <input
            type="submit"
            value="Login"
            className="w-full bg-[#f8b400] hover:bg-[#d89d00] text-white font-bold cursor-pointer border-none py-3 mt-2 rounded-md transition-all duration-300"
          />

        </div>

        <div className="mt-4 text-center">
          <h3 className="text-[#f8b400]">
            <button type="button" className="bg-transparent border-none text-[#f8b400] cursor-pointer text-[15px] hover:underline">
              Forgot Username
            </button>
            /
            <button type="button" className="bg-transparent border-none text-[#f8b400] cursor-pointer text-[15px] hover:underline">
              Password
            </button>
            ?
          </h3>
          <p className="mt-1">
            Don't have an account?{' '}
            <button
              type="button"
              className="bg-transparent border-none text-[#f8b400] cursor-pointer text-base font-bold hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </p>
        </div>

      </form>
    </div>
  );
};

export default Login;