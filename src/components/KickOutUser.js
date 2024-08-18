import React, {useState} from "react";
import axios from "axios";

function KickOutUser() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [frmData,setFrmData] = useState({
        username:''
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
        //Create Link
        try{
            const response = await axios.post(`${API_URL}/admin/kick-out-user`,frmData);
            alert(response.data.message);
        }catch(error){
            alert(error.response.data.message);
        }      
    }
    return (
        <main>
            <h1>Kick Out User</h1>
            <div className="container">
                <form className="" onSubmit={handleSubmit}>
                    <div className="input-container">  
                        <label htmlFor="mobile_number">Username:</label> 
                        <input  onChange={handleChange} value={frmData.username} type="text" name="username" placeholder="Enter Email/Mobile Number" required />
                    </div>
                    <div className="login-btn">
                    <button type="submit" >Submit</button>
                    </div>                    
                </form>
            </div>
         </main>        
    )
}

export default KickOutUser;