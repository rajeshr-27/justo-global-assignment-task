import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function CreateLink() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [frmData,setFrmData] = useState({
        username:''
    });
    const [createLink,setCreateLink] = useState('');

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFrmData({
            ...frmData,
            [name]:value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        //Create Link   
        try{
            const response = await axios.post(`${API_URL}/user/create-link`,frmData);
            setCreateLink(response.data.link)
            alert(response.data.message);
        }catch(error){
            alert(error.response.data.message);
        }        
    }
    return (
        <main>
            <h1>Create One Time Login Link</h1>
            <div className="container">
                <form className="" onSubmit={handleSubmit}>
                    <div className="input-container">  
                        <label htmlFor="mobile_number">Username:</label> 
                        <input  onChange={handleChange} value={frmData.username} type="text" name="username" placeholder="Enter Email/Mobile Number" required />
                    </div>
                    <div className="login-btn">
                    <button type="submit" >Create</button>
                    </div>
                              
                </form> 
            </div>

            {createLink &&
                        <p class="link">
                            One Time User Authentication Link: <Link to={`${createLink}`} target="_blank">{createLink}</Link>
                        </p>
                    }      
           
         </main>        
    )
}

export default CreateLink;