import React from "react";
import Heading from "./Heading";
import InputFields from "./InputFields";
import Buttons from "./Buttons";
import Links from "./Links";
const SignupPage = () => {
  return (
    <div className="center">
      <div className="container">
        <form>
          <Heading text="Signup" />
          <InputFields placeholder="Full Name" type="Text" />
          <InputFields placeholder="username" type="email" />
          <InputFields placeholder="password" type="password" />
          <InputFields placeholder="Confirm Password" type="text" />
          <Buttons name="Signup" />
          <Links zz="/" text="Want to Login?" />
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
