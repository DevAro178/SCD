import React, {useState} from "react";
const Register = (props) => {
    const[email,setemail] = useState('');
    const[pass,setpass] = useState('');
    const[name , setname] = useState("");


    const handelSubmit = (e) =>{
        e.preventDefault();

        console.log(email);
    }

    return ( 

        <>
        <form onSubmit={handelSubmit} >
        <input value = {name} type="text" placeholder='Full Name' id ="name" name ="name" className=" name" />

        <img src={email} alt="email" className="email" /><input value = {email} type="email" placeholder='user name' id ="email" name ="email" className=" name" />
        
        <img src={pass} alt="pass" className="email" /><input value = {pass} type="password" placeholder = 'password' id="password" name = "password"  className =" name" />
        <button type="submit" >Login</button>
        </form>

        <button onClick={()=> props.onFormSwitch("Login")}>Already have an account? Login </button> 
        </>
       
     );
}
 
export default Register;