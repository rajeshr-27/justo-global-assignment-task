import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Register() {
    const API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [frmData,setFrmData] = useState({
        name:'',
        email:'',
        phone_no:'',
        password:''
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFrmData({
            ...frmData,
            [name]:value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        //Register
        try{
            const response = await axios.post(`${API_URL}/user/create`,frmData);
            alert(response.data.message);
            navigate('/',{replace:true})
        }catch(error){
            alert(error.response.data.message);
        }

    }
    return (
        <main>
            <h1>Register</h1>
            <div className="container">
                <form className="" onSubmit={handleSubmit}>
                    <div className="input-container"> 
                        <label htmlFor="name">Name:</label> 
                        <input type="text" name="name" onChange={handleChange} value={frmData.name}  placeholder="Enter Name" required /> 
                        <label htmlFor="email">Email:</label> 
                        <input type="email" name="email" onChange={handleChange} value={frmData.email}    placeholder="Enter Email" required /> 
                        <label htmlFor="mobile_number">Mobile Number:</label> 
                        <input type="text" name="phone_no" onChange={handleChange} value={frmData.phone_no}  placeholder="Enter Mobile Number" required />
                        <label htmlFor="password">Password:</label> 
                        <input type="password" name="password" onChange={handleChange} value={frmData.password}  placeholder="Enter Password" required />
                    </div>
                    <div className="register-btn">
                        <button type="submit" >Register</button>
                    </div>                    
                </form>
            </div>
         </main>
        
    )
}

export default Register;