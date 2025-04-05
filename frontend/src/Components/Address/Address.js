import React from 'react'
import style from "../Address/Address.module.css"
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

const Address = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)

    return (
        <div className={style.maincontainer}>
            <h2>DELIVERY ADDRESS</h2>
            <div className={style.container}>
                <p>CONTACT DETAILS</p>
                <form onSubmit={handleSubmit(onSubmit)} className={style.formcontainer}>
                    <input type='text' placeholder='Name*' {...register("text", {required:"name is required"})}/>
                    
                    <input type='number' placeholder='Mobile No*'{...register("text", {required:"name is required"})}/>

                     <p>ADDRESS</p>
                     
                    <input type='text' placeholder='Pin Code*' {...register("text", {required:"Pin Code is required"})}/>

                    <input type='text' placeholder='Address(House No, Building, Area)*'/>

                    <input type='text' placeholder='Locality / Town*'/>

                    <button onClick={() => navigate("/payment")}>CONTINUE</button>

                </form>  
            </div>
        </div>
    )
}

export default Address

