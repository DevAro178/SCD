import React from 'react'
import Heading from './Heading'
import InputFields from "./InputFields"
import Buttons from './Buttons'
import Links from './Links'

const LoginPpage = () => {
  return (
    <div class="center">
        <div class="container">
      <form action="#">
      <Heading text="Login" />
      <InputFields  label="Email" placeholder ="username" type ="email" />
      <InputFields  label="Password" placeholder ="password" type ="password" />
      <Buttons name = "Login" />
      <Links zz="/Signup" text="Forget password ? or Signup"/>
      
      </form>
      </div>
    </div>
  )
}

export default LoginPpage
