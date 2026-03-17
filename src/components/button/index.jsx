


function Button({variant, label, onClick}){   

    return <button className={variant} onClick={onClick}>{label}</button>;

}

export default Button;