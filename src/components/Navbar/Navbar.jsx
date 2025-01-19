import "./Navbar.scss";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/" className="navbar__link">
          Movie App
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/favourites" className="navbar__link">
          Favourites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
