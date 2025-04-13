import React from'react'
import style from '../Signup/Signup.module.css'
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
      let response = await axios.post("http://localhost:5000/api/prod/signup", data)
      addpopup(response.data.message)

      setTimeout(()=>{
        if(data.profile ==='admin'){
          navigate('/admin')
        }else{
          navigate('/login')
        }
      }, 2000)

    } catch (err) {
      addpopup(err.response?.data?.message || "Signup failed");
      console.log("Error Response:", err.response?.data)
    }

  }

  return (
    <div className={style.signupcontainer}>
      <h1>Signup Now</h1>
      <div className={style.subcontainer}>
        <ToastContainer />
        <form onSubmit={handleSubmit(onSubmit)}>

          <input type="text" placeholder='Enter your name' {...register("name", { required: "Name is required" })}/>
          {errors.name && <span className={style.error}>{errors.name.message}</span>}

          <input type="number" placeholder='Enter your number'
          {...register("number", {required: "Phone number is required", minLength: { value: 10, message: "Number must be 10 digits" }})}/>
          {errors.number && <span className={style.error}>{errors.number.message}</span>}

          <input type="email" placeholder='Enter your email'
          {...register("email", { required: "Email is required", pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address"}})}/>
          {errors.email && <span className={style.error}>{errors.email.message}</span>}

          <input type="password" placeholder='Enter your Password'{...register("password", { required: "Password is required" })}/>
          {errors.password && <span className={style.error}>{errors.password.message}</span>}

          <div className={style.profile}>
            <label htmlFor="profile"></label>
            <select id='profile' {...register("profile", { required: "Profile is required" })} >
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            {errors.profile && <span className={style.errorlast}>{errors.profile.message}</span>}
        </div>

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
