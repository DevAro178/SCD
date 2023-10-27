import profile from "./images/a.png";
import email from "./images/email.jpg";
import pass from "./images/pass.png";
import profile1 from "./images/pp.png";

const Login = () => {
    return ( 
        <div className="container">
            <div className="sub-container">
                <div>
                    <div className="imgs">
                        <div className="container-imgs">

                            <img src={profile} alt="profile" className='profile' />
                        </div>
                    </div>


                    <div>
                      <h1>Login Page</h1>
                      <div>
                          <img src={email} alt="email" className="email" />
                          <input type="text" placeholder = 'user name' className =" name" />
                      </div>

                      <div className="second-input">
                          <img src={pass} alt="pass" className="email" />
                          <input type="password" placeholder = 'password' className =" name" />
                      </div >
                         <div className="login-button"> 
                         <button>Login</button>
                      </div>

                      
                        <p className ="links">
                            <a href="#">Forget password ?</a> or <a href="#"> Sign up </a>
                        </p>
                      


                   </div>
                
                </div>
                

            </div>
        </div>
     );
}
 
export default Login;