


import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = ({ cartAllProduct }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || false;
  });

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col-12 ${isDarkMode ? "bg-dark" : "bg-primary"} d-flex justify-content-between px-5`}>
          <ul className="d-flex gap-5 align-items-center m-0 p-0 py-3 ">
            <NavLink
              to="/Home"
              className="list-unstyled text-light p-0 pointer text-decoration-none"
            >
              HOME
            </NavLink>
            <NavLink 
              to="/About" 
              style={{ textDecoration: "none" }}
              className="list-unstyled text-light p-0 pointer"
            >
              ABOUT
            </NavLink>
            <NavLink 
              to="/Contact" 
              style={{ textDecoration: "none" }}
              className="list-unstyled text-light p-0 pointer"
            >
              CONTACT
            </NavLink>
            <NavLink 
              to="/" 
              style={{ textDecoration: "none" }}
              className="list-unstyled text-light p-0 pointer"
            >
              LOGIN
            </NavLink>
            <NavLink 
              to="/Form" 
              style={{ textDecoration: "none" }}
              className="list-unstyled text-light p-0 pointer"
            >
              FORM
            </NavLink>
          </ul>
          <ul className="m-0 p-0 py-3 position-relative d-flex align-items-center">
            <NavLink
              to="/cart"
              className="list-unstyled text-light p-0 pointer"
            >
              <i className="fa-solid fa-cart-shopping fs-3"></i>
            </NavLink>
            <span
              className="text-decoration-none count rounded-pill text-dark position-absolute top-0 right"
              style={{ backgroundColor: "orange", right: '44%' }}
            >
              {cartAllProduct?.length}
            </span>
            <div 
              onClick={toggleTheme} 
              className="ms-3 pointer d-flex align-items-center"
              style={{ cursor: 'pointer' }}
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon 
                icon={isDarkMode ? faSun : faMoon} 
                className="text-light" 
                size="lg" 
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
