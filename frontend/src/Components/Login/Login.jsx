import React from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Link, useNavigate } from "react-router-dom";
import style from '../Login/Login.module.css';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const addpopup = (message)=> toast(message)

  let onSubmit=async (loginData)=>{
    try {
      let response = await axios.post("http://localhost:5000/api/prod/login", loginData)
      addpopup(response.data.message)

      setTimeout(() => navigate("/"), 1000);

    } catch (err) {
      console.log(err)
      addpopup(err.response?.data?.message || "Login failed");
      
    }
  }

  return (
    <div className={style.maincontainer}>
      <h1>Login Now</h1>
      
      <ToastContainer autoClose={1000} />
      <form onSubmit={handleSubmit(onSubmit)} className={style.container}>

        <div className={style.details}>

          <input type="text" name="username" placeholder="Enter your Number or Email" {...register('username', {required:"Name or email is required"})}/>
          {errors.username && <p className={style.error}>{errors.username.message}</p>}

          <input type="password" name='password' placeholder="Enter your Password" {...register("password",{required:"password is required"})} />
          {errors.password && <p className={style.error}>{errors.password.message}</p>}

          <input type="submit" value="Login" className={style.loginBtn} />  

        </div>

        <div className={style.extradetails}>
          <h3 className={style.forgot}><button>Forgot Username</button>/<button>Password</button>?</h3>
          <p>
            Don't have an account? <button className={style.signupBtn} onClick={() => navigate("/signup")}>Sign Up</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;








