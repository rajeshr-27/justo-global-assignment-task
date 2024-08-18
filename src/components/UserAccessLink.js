import axios from "axios";
import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserAccessLink() {
    
    const API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const {code} = useParams()
    const [errorMessage,setErrorMessge] = useState()
    useEffect(()=> {
        if(!code){
            navigate('/',{replace:true})
        }

        const fetchToken = async () => {
                try{
                    const response = await axios.get(`${API_URL}/user/access/${code}`);
                    localStorage.setItem('token',response.data.token);
                    alert(response.data.message);
                    navigate('/get-time',{replace:true})

                }catch(error){
                    //console.log(error.response.data.message);
                    setErrorMessge(error.response.data.message)
                }
        }
        fetchToken();
    },[code,API_URL,navigate])

    return(<>
        <main>
        <h1>{
                errorMessage &&
                <div className="error"> {errorMessage}</div>
            }</h1>
        </main>
    </>)
}

export default UserAccessLink;