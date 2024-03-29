import React, { useState } from "react";
import "./header.css";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const closeMenu = () => {
        setToggle(false);
    };

    const [activeNav, setActiveNav] =useState('#home');

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Fahs.</a>

                <div className = {toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')}
                            className={activeNav === "#home" ? "nav__link active-link" : "nav__link"} >
                            <i className="uil uil-estate nav__icon"></i>
                            Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')}
                            className={activeNav === "#about" ? "nav__link active-link" : "nav__link"} >
                            <i className="uil uil-user nav__icon"></i>
                            About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')}
                            className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-desktop nav__icon"></i>
                            Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}
                            className={activeNav === "#po" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-bag-alt nav__icon"></i>
                            Portfolio
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => setToggle(false)}></i>
                </div>

                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className={toggle ? "uil uil-close" : "uil uil-bars"}></i>
                </div>
            </nav>
        </header>
    )
}
export default Header;