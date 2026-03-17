import "./Header.css";

function Header({ children }) {
  return (
    <header className="header">
      {/* Otros elementos del header */}
      {children}
    </header>
  );
}
export default Header;