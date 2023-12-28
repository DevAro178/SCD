import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
// import avatar from "../assets/avatar.svg";

const Header = () => {
  return (
<header class="header header--loggedIn">
      <div class="container">
        <a href="/" class="header__logo">
          <img src={logo} />
          <h1>TMS</h1>
        </a>
        {/* <form class="header__search">
          <label>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <title>search</title>
              <path
                d="M32 30.586l-10.845-10.845c1.771-2.092 2.845-4.791 2.845-7.741 0-6.617-5.383-12-12-12s-12 5.383-12 12c0 6.617 5.383 12 12 12 2.949 0 5.649-1.074 7.741-2.845l10.845 10.845 1.414-1.414zM12 22c-5.514 0-10-4.486-10-10s4.486-10 10-10c5.514 0 10 4.486 10 10s-4.486 10-10 10z"
              ></path>
            </svg>
            <input placeholder="Search for posts" />
          </label>
        </form> */}
        <nav class="header__menu">
          {/* <!-- Not Logged In --> */}
          {/* <a href="/login.html">
            <img src={avatar} />
            <p>Account</p>
          </a> */}

          {/* <!-- Logged In -->
          <!-- <a href="#">
            <div class="avatar avatar--medium active">
              <img src="https://randomuser.me/api/portraits/men/37.jpg" />
            </div>
            <p>John Doe <span>@john_doe</span></p>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <title>chevron-down</title>
              <path d="M16 21l-13-13h-3l16 16 16-16h-3l-13 13z"></path>
            </svg>
          </a> --> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;