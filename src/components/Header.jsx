import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";

function Header() {
  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="logo" />
        <img src={hamburger} alt="close menu button" />
      </div>
      <nav>
        <Link to="./">Home</Link>
        <Link to="./destination">Destination</Link>
        <Link to="./crew">Crew</Link>
        <Link to="./technology">Technology</Link>
      </nav>
    </div>
  );
}

export default Header;
