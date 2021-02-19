import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";

{
  /*const mapState = (state) => ({
  currentUser: state.user.currentUser,
}); */
}

const Header = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Simple Logo" />
          </Link>
        </div>

        <div className="classToActions">
          {currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>
              <li>
                <span onClick={() => auth.signOut()}>Logout</span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
