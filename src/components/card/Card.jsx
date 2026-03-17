function Card({ photo, name, email, phone, location }) {
    return (
        <div className="card">
            <img src={photo} alt={name} />
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Location: {location}</p>
        </div>
    );
}
export default Card;