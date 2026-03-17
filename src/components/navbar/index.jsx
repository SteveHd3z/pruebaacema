import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAppContext } from "../../context/appContext";
import Button from "../button";

function Navbar() {

    const { logged, setLogged } = useAppContext();

    function handleLogout() {
        setLogged(false);
    }


    return (
        <nav className="navbar">
            {logged ? <p>Welcome!</p> : <Link to='/'>Login</Link>}
            <Link to='/home'>Dashboard</Link>
            <Link to='/search'>Search</Link>
            {logged && <Button onClick={handleLogout} text="Logout" label="Logout"/>}
        </nav>
    );
}

export default Navbar;