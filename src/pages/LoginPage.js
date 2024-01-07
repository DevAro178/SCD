import React,{useState} from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from "../redux/user";
// import avatar from "../assets/avatar.svg";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password
      })
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data));
    } else {
      alert("Invalid Username or Password")
    }
  };
  return (
    <div>
      
    <main class="auth layout">
      <div class="container">
        <div class="layout__box">
          <div class="layout__boxHeader">
            <div class="layout__boxTitle">
              <h3>Login</h3>
            </div>
          </div>
          <div class="layout__body">
            <h2 class="auth__tagline">Book your Bus Tickets With Ease.</h2>

            <form class="form" onSubmit={handleSubmit}>
              <div class="form__group form__group">
                <label for="room_name">Username</label>
                <input id="username" name="username" type="text" placeholder="e.g. dennis_ivy"  onChange={handleChange} />
              </div>
              <div class="form__group">
                <label for="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                  onChange={handleChange}
                />
              </div>

              <button class="btn btn--main" type="submit">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <title>lock</title>
                  <path
                    d="M27 12h-1v-2c0-5.514-4.486-10-10-10s-10 4.486-10 10v2h-1c-0.553 0-1 0.447-1 1v18c0 0.553 0.447 1 1 1h22c0.553 0 1-0.447 1-1v-18c0-0.553-0.447-1-1-1zM8 10c0-4.411 3.589-8 8-8s8 3.589 8 8v2h-16v-2zM26 30h-20v-16h20v16z"
                  ></path>
                  <path
                    d="M15 21.694v4.306h2v-4.306c0.587-0.348 1-0.961 1-1.694 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.732 0.413 1.345 1 1.694z"
                  ></path>
                </svg>

                Login
              </button>
            </form>

            <div class="auth__action">
              <p>Haven't signed up yet?</p>
              <Link to="/signup" >Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default LoginPage;