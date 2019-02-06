import React from 'react';
import classes from './RetinoSkinContent.css';
const RetinoSkinContent=(props)=>(
  <div className={classes.RetinoSkinContent}>
    <p>{props.content}</p>
  </div>
);

export default RetinoSkinContent;