import React from "react";
import Card from "../../card/Card";
import { useAppContext } from "../../../context/appContext";


function Home() {
    const { users } = useAppContext();


    users.map(user => console.log(user)); // Imprime cada usuario en la consola
    console.log(users);




    return (
        <div>
            <h1>Meet the Users!</h1>
            {users.map((u, index) => (
                <Card
                    key={index}
                    photo={u.user.picture.large}
                    name={u.user.name.first + " " + u.user.name.last}
                    email={u.user.email}
                    phone={u.user.phone}
                    location={u.user.location.city + ", " + u.user.location.state}
                />
            ))}
        </div>
    );
}

export default Home;