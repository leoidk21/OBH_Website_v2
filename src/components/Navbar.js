import React, { useState, useEffect } from "react";
import logo from "../assets/image.png";
import "../components/Navbar.css";
import "../components/Import.css";
import "../components/Responsive.css";
import { HashLink } from "react-router-hash-link";

function MainComponent() {
    const [click, setClick] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 960;
            setIsMobile(mobile);

            if (!mobile) {
                setClick(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="container">
            <nav className="navbar">
                <div className="navbar-container">
                    <li className="navbar-logo">
                        <HashLink 
                            smooth
                            to="/#home"
                        >
                            <div className="navbar-logo">
                                <img src={logo} alt="Logo" className="logo" />
                                <h2 className="brand-name">Orchestrated By <span className="history">HIS</span>tory</h2>
                            </div>
                        </HashLink>
                    </li>

                    {isMobile && (
                        <div
                            className="menu-container"
                            onClick={() => setClick(!click)}
                        >
                            <i
                                className={
                                    `fas ${click ? "fa-times rotate" : "fa-bars"}`
                                }
                            />
                        </div>
                    )}

                    <ul
                        className={`nav-menu ${isMobile ? (click ? "active" : "hidden") : ""}`}
                    >
                        <li className="nav-item">
                            <HashLink 
                                smooth
                                to="/#home"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink 
                                smooth
                                to="/#services"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Services
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink 
                                smooth
                                to="/#gallery"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Gallery
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink 
                                smooth
                                to="/#venue"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Venue
                            </HashLink>
                        </li>

                        <li className="nav-item dropdown">
                            <span
                                className="nav-links-no-underline dropdown-toggle"
                                onClick={(e) => {
                                  if (isMobile) {
                                    e.preventDefault();
                                    setClick(!click);
                                } else {
                                    closeMobileMenu();
                                  }
                                }}
                            >
                                Explore <i className="fas fa-chevron-down chevron-icon"></i>
                            </span>

                             <ul className={`dropdown-menu ${isMobile && !click ? "hidden" : ""}`}>
                                <li>
                                    <HashLink smooth to="/#about" className="dropdown-link" onClick={closeMobileMenu}>About Us</HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="/#review" className="dropdown-link" onClick={closeMobileMenu}>Reviews</HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="/#faqs" className="dropdown-link" onClick={closeMobileMenu}>FAQs</HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="/#contact" className="dropdown-link" onClick={closeMobileMenu}>Contact</HashLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default MainComponent;
