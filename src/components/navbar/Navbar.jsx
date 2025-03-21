import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import cross from '../../assets/shared/icon-close.svg';
import './navbar.css';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  useEffect(() => {
    document.body.classList.toggle('nav--open', navOpen);
  }, [navOpen]);

  return (
    <nav className="nav">
      <Link className="logo" to="./">
        <img src={logo} alt="logo" />
      </Link>

      <button
        onClick={toggleNav}
        className="nav__btn nav__open-btn"
        aria-label="menu toggle"
        aria-controls="menu"
      >
        {navOpen ? (
          <img src={cross} alt="nav close icon" />
        ) : (
          <img src={hamburger} alt="nav open icon" />
        )}
      </button>

      <div id="menu" className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink onClick={toggleNav} className="nav__link" to="./">
              <span aria-hidden="true">00</span>
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink onClick={toggleNav} className="nav__link" to="destination">
              <span aria-hidden="true">01</span>
              Destination
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink onClick={toggleNav} className="nav__link" to="crew">
              <span aria-hidden="true">02</span>
              Crew
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink onClick={toggleNav} className="nav__link" to="technology">
              <span aria-hidden="true">03</span>
              Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
