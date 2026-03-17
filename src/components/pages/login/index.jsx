import { useAppContext } from "../../../context/appContext";
import { Button } from '@mui/material';
import { useFetchUsers } from "../../../hooks/useFetchUsers";

function Login(){

    const { data, isLoaded, error, getPostsData} =useFetchUsers();
    
    
/*
    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
        <ul>
            {data.map(item => (
            <li key={item.id}>
                {item.name} {item.price}
            </li>
            ))}
        </ul>
        );
    }*/


    


}
export default Login;