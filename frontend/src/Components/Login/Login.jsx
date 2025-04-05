import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Link, useNavigate } from "react-router-dom";
import style from '../Login/Login.module.css';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  let [loginData, setloginData] = useState({username:"", Password:""})
  
  console.log(loginData)

  let changeForm=({target:{name, value}})=>{
    setloginData({...loginData, [name]:value})

  }
  const addpopup = (message)=> toast(message)

  let login=async (e)=>{
    e.preventDefault()
    try {
      let response = await axios.post("http://localhost:5000/api/prod/login", loginData)
      addpopup(response.data.message)

    } catch (err) {
      console.log(err)
      
    }
  }

  return (
    <div className={style.maincontainer}>
      <h1>Login Now</h1>
      
      <ToastContainer autoClose={1000} />
      <form onSubmit={login} className={style.container}>

        <div className={style.details}>

          <input type="text" name="username" placeholder="Enter your Number & Email" onChange={changeForm} />

          <input type="text" name='password' placeholder="Enter your Password" onChange={changeForm} />

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








