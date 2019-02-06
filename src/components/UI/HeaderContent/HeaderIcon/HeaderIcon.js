import icon from "../../../../assets/photos/icon.png";
import React from 'react';
import classes from './HeaderIcon.css';
const HeaderIcon=(props)=>(
    <div>
    <img src={icon} alt="icon" className={classes.HeaderIcon}></img>
    </div>
);
export default HeaderIcon;