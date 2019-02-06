import React from "react";
import classes from './FooterContent.css';
const FooterContent=(props)=>(
    <div className={classes.FooterContent}>
     <span>&#169;{props.footerData}</span>
    </div>
  );

export default FooterContent;