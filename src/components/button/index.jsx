import "./Button.css";


function Button({variant, label, onClick}){   

    return <button className={`button ${variant}`} onClick={onClick}>{label}</button>;

}

export default Button;