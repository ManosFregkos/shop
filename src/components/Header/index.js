import React from "react";
import "./styles.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Simple Logo" />
          </Link>
        </div>

        <div className="classToActions">
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
