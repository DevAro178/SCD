import React from 'react'
import Heading from './Heading'
import InputFields from "./InputFields"
import Buttons from './Buttons'
import Links from './Links'
const SignupPage = () => {
  return (
    <div className='cente'>
      <div className='container'>
        <form>
      <Heading text="Signup" />
      <InputFields  label="Full Name" placeholder ="Full Name" type ="Text" />
      <InputFields  label="Email" placeholder ="username" type ="email" />
      <InputFields  label="Password" placeholder ="password" type ="password" />
      <InputFields label="Confirm" placeholder="Confirm Password" type="text"/>
      <Buttons name = "Signup" />
      <Links zz="/" text="Already have an account? Login"/>
      </form>
      
      </div>

    </div>
  )
}

export default SignupPage
