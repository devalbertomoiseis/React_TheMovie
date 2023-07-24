import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="background">
      <div className="container">
        <nav className="navbar">
          <p>
            <Link to="/" className="link">
              {" "}
              Principal{" "}
            </Link>
          </p>
          <p>
            <Link to="/Contact" className="link">
              {" "}
              Equipe{" "}
            </Link>
          </p>
          <p>
            <Link to="/Sobre" className="link">
              {" "}
              Sobre{" "}
            </Link>
          </p>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
