import React, {useState} from "react";
const Login = (props) => {
    const[email,setemail] = useState('');
    const[pass,setpass] = useState('');

    const handelSubmit = (e) =>{
        e.preventDefault();

        console.log(email);
    }


    return ( 
        <>
        <form onSubmit={handelSubmit} >
        <img src={email} alt="email" className="email" /><input value = {email} type="email" placeholder='user name' id ="email" name ="email" className=" name" />
        
        <img src={pass} alt="pass" className="email" /><input value = {pass} type="password" placeholder = 'password' id="password" name = "password"  className =" name" />
        <button type="submit" >Login</button>
        </form>

        <button onClick={()=> props.onFormSwitch("Register")}>Don't have an account? Sign up</button> 
        </>
     );
}
 
export default Login;