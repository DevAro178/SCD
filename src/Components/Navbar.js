import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };




    return (
  
            <nav className="navbar">


            <div className ="menuicon">
             
            <IconButton 

              color = 'inherit'
              onClick={toggleDrawer("left", true)}
            
            >
    
            <MenuIcon />
          </IconButton>
        
          </div>


               
                <h2>TRS</h2>

                
            
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact Us</a>
                    <i className="fas fa-bars"></i>
                    <button className="b1" type="submit" >Login</button>
                    <button className="b2" type="submit" >Signup</button>
                    <i className="ri-menu-line"></i>
                </div>
                
                <Sidebar state={state} setState={setState} toggleDrawer={toggleDrawer} >

                </Sidebar>
            </nav>




    )
}


export default Navbar
