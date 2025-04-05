import React, { useState } from 'react'
import style from '../Signup/Signup.module.css'
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate()
    let[coustData, setcoustData] = useState({name:"", number:"", email:"", password:""})

    let changeForm = ({target:{name, value}})=>{
      setcoustData({...coustData, [name]:value})
    }
    const addpopup = (message)=> toast(message)

    let Signup=async(e)=>{
      e.preventDefault()

      console.log("sending Data:", coustData)
      try {
        let response = await axios.post("http://localhost:5000/api/prod/signup", coustData)
        addpopup(response.data.message)

        setTimeout(() => navigate('/login'), 2000);
        
      } catch (err) {
        console.log("Error Response:", err.response?.data)
        
      }
    }

  return (
    <div className={style.signupcontainer}>
      <h1>Signup Now</h1>
      <div className={style.subcontainer}>
      <ToastContainer />
        <form onSubmit={Signup}>
          
            <input type="text" name='name' placeholder='Enter your name' onChange={changeForm}/>

            <input type="number" name='number' placeholder='Enter your number' onChange={changeForm}/>

            <input type="email" name='email' placeholder='Enter your email' onChange={changeForm}/>

            <input type="password" name='password' placeholder='Enter your Password' onChange={changeForm}/>

        <button type='submit'>Sign Up</button>      
        </form>

        <div className={style.extracontent}>
          <p>Already have an account? <button onClick={() => navigate("/login")}>Log In</button></p>
          <div className={style.divider}>
            <hr />
            <span>or</span>
            <hr />
          </div>
          <button className={style.googleBtn}>
            <FcGoogle size={20} /> Sign up with Google
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Signup

