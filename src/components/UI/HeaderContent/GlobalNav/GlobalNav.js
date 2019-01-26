import React from "react"; 
import classes from './GlobalNav.css';
const GlobalNav=(props)=>(
    <div className={classes.GlobalNav}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Links</li>
      </ul>
    </div>
  );

export default GlobalNav;