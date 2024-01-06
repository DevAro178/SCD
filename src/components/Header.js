import React from "react";
import logo from "../assets/logo.svg";
import { Link,useNavigate } from "react-router-dom";
import { persistor } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

// import avatar from "../assets/avatar.svg";

const Header = () => {
  const { username } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' }); // dispatch a logout action
    persistor.purge(); // purge the persisted state
    window.location.reload();
};
  
  return (
    <header class="header header--loggedIn">
      <div class="container">
        <a href="/" class="header__logo">
          <img src={logo} />
          <h1>TMS</h1>
        </a>
        <nav class="header__menu">
          <a href="#" onClick={handleLogout} >
          <i class="fa-solid fa-right-from-bracket"></i>
            {username ? <p>  Logout </p> : <p> Login </p>}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;