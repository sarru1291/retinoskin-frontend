import React from "react";
import classes from './HeaderName.css'; 
const HeaderName=(props)=>(
    <div className={classes.HeaderName}>
      <span> {props.name}</span>
    </div>
  );

export default HeaderName;