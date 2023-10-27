import React, {useState} from "react";
import LoginPage from "./Login-page";
import Register from "./Register";

import Login from "./Login";
import LoginPpage from "./ammad/LoginPpage";
import SignupPage from "./ammad/SignupPage";
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';


function App() {

  // const [currentform , setform] = useState ("ahmedn");

  // const toggleForm = (formName) => {

  //   setform (formName);
  // }
   
  // return (
  //   <div className="App">
  //    {
  //     currentform === "Login" ? <Login onFormSwitch = {toggleForm} />  : <Register onFormSwitch = {toggleForm}/>
  //    }


     
      
  //   </div>
  // );y

  return(
    <Router>
      
        <Switch>
          <Route exact path="/" >
            <LoginPpage/>
          </Route>
          <Route path="/signup" >
            <SignupPage/>
          </Route>


        </Switch>
      </Router>
   

  )

}

export default App;
