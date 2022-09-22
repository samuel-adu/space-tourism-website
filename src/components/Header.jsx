import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import cross from "../assets/shared/icon-close.svg";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
  }, [navOpen]);

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <Link className="nav-link" to="./">
            <img src={logo} alt="logo" />
          </Link>

          <button onClick={toggleNav} className="nav-btn">
            <img src={navOpen ? cross : hamburger} alt="nav toggle" />
          </button>

          <nav>
            <div className="nav-list">
              <Link onClick={toggleNav} className="nav-link" to="./">
                <span aria-hidden="true">00</span>
                Home
              </Link>
              <Link onClick={toggleNav} className="nav-link" to="destination">
                <span aria-hidden="true">01</span>
                Destination
              </Link>
              <Link onClick={toggleNav} className="nav-link" to="crew">
                <span aria-hidden="true">02</span>
                Crew
              </Link>
              <Link onClick={toggleNav} className="nav-link" to="technology">
                <span aria-hidden="true">03</span>
                Technology
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
