import React, {useState} from "react";
import LoginPage from "./Login-page";
import Register from "./Register";

import Login from "./Login";
import LoginPpage from "./Components/LoginPpage";
import SignupPage from "./Components/SignupPage";
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";



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
          <Route path="/nav" >
            <Navbar/>
          </Route>

          {/* <Route path="/sidebar" >
            <Sidebar/>
          </Route> */}
         


        </Switch>
      </Router>
   

  )

}

export default App;
