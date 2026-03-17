import { useAppContext } from "../../../context/appContext";
import { useFetchUsers } from "../../../hooks/useFetchUsers";
import "./Login.css";
import Form from "../../form/form";
import { useState, useEffect } from "react";

function Login(){

    const { data, isLoaded } = useFetchUsers();
    const { users, setUsers, logged, setLogged } = useAppContext();

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    useEffect(() => {
        if (data && data.results) {
            setUsers(data.results);
        }
    }, [data]);

    console.log(users);

    function validateLogin(email, password){
        
        if (!users || users.length === 0) {
            alert("Datos no cargados, intenta de nuevo");
            return;
        }

        const user = users.find(u => u.user.email === email && u.user.password === password);

        if (user){
            alert("Login exitoso: " + user.user.name.first);
            setLogged(true);
            
        } else {
            alert("Email o contraseña incorrectos");
        }        
        
    }



    function handleSubmit(event){

        event.preventDefault();
        const email = event.target.email.value;
        setEmail(email);
        const password = event.target.password.value;
        setPassword(password);        
        validateLogin(email, password);        

    }

    
    return <div className="form">        
            <Form
                onSubmit={handleSubmit}
            />
        </div>

    }

export default Login;