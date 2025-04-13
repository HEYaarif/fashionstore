import React, { useState } from 'react'
import style from "../Address/Address.module.css"
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Address = () => {
    const navigate = useNavigate();
    let [addData, setaddData] = useState({name:"",number:"", pinCode:"", address:"", locality:""})

    let changeadd = ({target:{name, value}})=>{
        setaddData({...addData, [name]:value})
    }

    const addpopup = (message)=> toast(message)

    let address = async(e)=>{
        e.preventDefault()
        try {
            let response = await axios.post("http://localhost:5000/api/prod/address", addData)
            addpopup(response.data.message)
            
        } catch (err) {
            console.log(err)
            addpopup("Something went wrong while saving address.");
            
        }
    }
   
    return (
        <div className={style.maincontainer}>
            <h2>DELIVERY ADDRESS</h2>
            <div className={style.container}>
                <p>CONTACT DETAILS</p>
                <ToastContainer />
                <form onSubmit={address} className={style.formcontainer}>
                    <input type='text' name='name' placeholder='Name*' onChange={changeadd}/>
                    
                    <input type='number' name='number' placeholder='Mobile No*' onChange={changeadd}/>

                     <p>ADDRESS</p>
                     
                    <input type='text' name='pinCode' placeholder='Pin Code*' onChange={changeadd}/>

                    <input type='text' name='address' placeholder='Address(House No, Building, Area)*' onChange={changeadd}/>

                    <input type='text' name='locality' placeholder='Locality / Town*' onChange={changeadd}/>

                    <button onClick={() => navigate("/payment")}>CONTINUE</button>
                    {/* <button>CONTINUE</button> */}

                </form>  
            </div>
        </div>
    )
}

export default Address

