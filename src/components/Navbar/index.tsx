import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import logo from "../../assets/Logo.png";
import "./index.sass";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}): JSX.Element => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <>
      <nav className="navbar-container">
        <div 
          className={`navbar-menu pointer show ${isMenuOpen ? "open" : "close"}`}
          onClick={closeMenu}
        >
          <span className="menu-item"></span>
          <span className="menu-item"></span>
          <span className="menu-item"></span>
        </div>
        <ul>
          <NavbarItem name="Comunidade" classItem={isMenuOpen ? "show" : "hide"} />
          <NavbarItem name="Jogos" classItem={isMenuOpen ? "show" : "hide"} />
          <img src={logo} alt="Logo game fusion" className="logo" />
          <NavbarItem name="Serviços" classItem={isMenuOpen ? "show" : "hide"} />
          <NavbarItem name="Ajuda" classItem={isMenuOpen ? "show" : "hide"} />
        </ul>
        <div className="auth-container">
          <Link to="/auth" className="auth-button"> 
            <BsFillPersonFill />
            <h1>Login</h1>
          </Link>
        </div>
      </nav>
      <aside></aside>
    </>
  );
};

export default Navbar;
