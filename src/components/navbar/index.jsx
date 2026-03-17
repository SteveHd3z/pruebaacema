import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to='/'>Login</Link>
            <Link to='/home'>Home</Link>
        </nav>
    );
}

export default Navbar;