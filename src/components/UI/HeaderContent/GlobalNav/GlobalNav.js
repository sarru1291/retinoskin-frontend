import React,{Component} from "react"; 
import classes from './GlobalNav.css';
import {NavLink} from 'react-router-dom';

class GlobalNav extends Component{
  
  render(){
  
    return (
      <div className={classes.GlobalNav}>
        <ul>
          <li><NavLink 
                  to="/" 
                  exact 
                  activeClassName="my-active"
                  activeStyle={{
                    backgroundColor: "#1d272e",
                    color: "white"
                  }}>Home</NavLink></li>
          <li><NavLink 
                  to={{
                        pathname:'/disease'
                      }}
                  activeClassName="my-active"
                  activeStyle={{
                    backgroundColor: "#1d272e",
                    color: "white"
                  }}>Prevention and Causes</NavLink></li>
          <li><NavLink 
                  to="/doctors"
                  activeClassName="my-active"
                  activeStyle={{
                    backgroundColor: "#1d272e",
                    color: "white"
                  }}>Doctors</NavLink></li>        
          <li><NavLink 
                  to="/aboutus"
                  activeClassName="my-active"
                  activeStyle={{
                    backgroundColor: "#1d272e",
                    color: "white"
                  }}>About Us</NavLink></li>
          <li><NavLink 
                  to="/contactus"
                  activeClassName="my-active"
                  activeStyle={{
                    backgroundColor: "#1d272e",
                    color: "white"
                  }}>Contact Us</NavLink></li>
        </ul>
          
    </div>
    );
  }
}

export default GlobalNav;