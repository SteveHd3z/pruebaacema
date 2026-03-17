import { useAppContext } from "../../../context/appContext";
import { Button } from '@mui/material';
import { useFetchUsers } from "../../../hooks/useFetchUsers";
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import "./Login.css";
import Form from "../../form/form";
import { useState } from "react";

function Login(){

    const { data, isLoaded, error, getPostsData} =useFetchUsers();
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");


    function validateLogin(data, email, password){ 
               

        const users = data.results;
        
        users.forEach(user => {
            if (user.email === email && user.password === password) {
                console.log("User found:", user);
                return user;
            }else{
                console.log("User not found");
            }
        });
        
    }



    function handleSubmit(event){

        event.preventDefault();
        const email = event.target.email.value;
        setEmail(email);
        const password = event.target.password.value;
        setPassword(password);        
        validateLogin(data, email, password);        

    }

    

    
    return <div className="form">        
            <Form
                onSubmit={handleSubmit}
            />
        </div>

    }
export default Login;