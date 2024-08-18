import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function GetTime() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [user,setUser] = useState();
    const [currentServerTime,SetCurrentServerTime] = useState();
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(()=>{
        if(!token){
            navigate('/',{replace:true})
        }else {
            const fetchUser = async () => {
                try{
                    const response = await axios.get(`${API_URL}/user/get-time`,{
                        headers:{
                            Authorization : `Bearer ${token}`
                        }
                    })
                    setUser(response.data.user)
                    SetCurrentServerTime(response.data.current_time)
                }catch(error){
                    navigate('/',{replace:true})
                   // alert(error.response.data.message);
                    
                }
            }
            fetchUser();
        }
        
    },[token,API_URL,navigate])
    const handleLogOut = () => {
        localStorage.removeItem('token');
    }
    return (
        <main>
           {user && <h1>Welcome {user && user.name}!</h1> }
            <div className="container">
                <form className="">
                    <div className="input-container"> 
                        {user &&
                            <>
                                 <label for="mobile_number"><span>Username:{user.email} | {user.phone_no} - </span><span><Link onClick={handleLogOut}>Logout</Link></span></label>
                                <label for="mobile_number">Server Current Time: <span className="server-time">{currentServerTime}</span></label>
                            </>
                        } 
                       
                    </div>        
                </form>
            </div>
         </main>        
    )
}

export default GetTime;