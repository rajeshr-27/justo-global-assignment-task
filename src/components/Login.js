import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [frmData,setFrmData] = useState({
        username:'',
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
         //Login
         try{
            const response = await axios.post(`${API_URL}/user/login`,frmData);
            localStorage.setItem('token',response.data.token);
            alert(response.data.message);
            navigate('/get-time',{replace:true})
        }catch(error){
            alert(error.response.data.message);
        }

    }

     return (
        <main>
            <h1>Login</h1>
            <div className="container">
                <form className="" onSubmit={handleSubmit}>
                    <div className="input-container">  
                        <label htmlFor="mobile_number">Username:</label> 
                        <input onChange={handleChange} value={frmData.username}  type="text" name="username" placeholder="Enter Email/Mobile Number" required />
                        <label htmlFor="password">Password:</label> 
                        <input onChange={handleChange}   value={frmData.password} type="password" name="password" placeholder="Enter Password" required />
                    </div>
                    <div className="login-btn">
                    <button type="submit" >Login</button>
                    </div>
                    
                </form>
            </div>
         </main>
        
    )
}

export default Login;