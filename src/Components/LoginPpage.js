import React from "react";
import Heading from "./Heading";
import InputFields from "./InputFields";
import Buttons from "./Buttons";
import Links from "./Links";

const LoginPpage = () => {
  return (
    <div className="center">
      <div className="container">
        <form action="#" autoComplete="off">
          <Heading text="Login" />
          <InputFields placeholder="username" type="email" />
          <InputFields placeholder="password" type="password" />
          <Buttons name="Login" />
          <Links zz="/Signup" text="Join us here!!!" />
        </form>
      </div>
    </div>
  );
};

export default LoginPpage;
