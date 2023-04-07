import React from "react";
import NavbarItem from "./NavbarItem";
import logo from "../../assets/Logo.png";
import "./index.sass";
import { BsFillPersonFill } from "react-icons/bs";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}): JSX.Element => {
  return (
    <>
      <nav className="navbar-container">
        <ul>
          <NavbarItem name="Comunidade" />
          <NavbarItem name="Jogos" />
          <img src={logo} alt="Logo game fusion" className="logo" />
          <NavbarItem name="Serviços" />
          <NavbarItem name="Ajuda" />
          <li className="auth-li">
            <a href="/auth" className="auth-button">
              <BsFillPersonFill />
              <h1>Login</h1>
            </a>
          </li>
        </ul>
      </nav>
      <aside></aside>
    </>
  );
};

export default Navbar;
