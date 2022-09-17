import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <Link className="nav-link" to="./">
            <img src={logo} alt="logo" />
          </Link>
          <img src={hamburger} alt="menu button" />
        </div>
        <nav>
          <Link className="nav-link" to="./">
            Home
          </Link>
          <Link className="nav-link" to="destination">
            Destination
          </Link>
          <Link className="nav-link" to="crew">
            Crew
          </Link>
          <Link className="nav-link" to="technology">
            Technology
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
