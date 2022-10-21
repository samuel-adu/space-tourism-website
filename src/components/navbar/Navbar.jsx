import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import cross from "../../assets/shared/icon-close.svg";
import "./navbar.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  useEffect(() => {
    document.body.classList.toggle("nav--open", navOpen);
  }, [navOpen]);

  return (
    <div className="navbar">
      <Link className="logo" to="./">
        <img src={logo} alt="logo" />
      </Link>

      <button onClick={toggleNav} className="nav-btn">
        <img src={hamburger} alt="nav toggle" />
      </button>

      <nav>
        <button onClick={toggleNav} className="nav-btn nav__close-btn">
          <img src={cross} alt="nav toggle" />
        </button>
        <div>
          <ul className="nav__list">
            <li className="nav__item">
              <Link onClick={toggleNav} className="nav__link" to="./">
                <span aria-hidden="true">00</span>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link onClick={toggleNav} className="nav__link" to="destination">
                <span aria-hidden="true">01</span>
                Destination
              </Link>
            </li>
            <li className="nav__item">
              <Link onClick={toggleNav} className="nav__link" to="crew">
                <span aria-hidden="true">02</span>
                Crew
              </Link>
            </li>
            <li className="nav__item">
              <Link onClick={toggleNav} className="nav__link" to="technology">
                <span aria-hidden="true">03</span>
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
