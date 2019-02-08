import React from 'react';
import classes from './ImageOutput.css';

const ImageOutput=(props)=>(
  <div className={classes.ImageOutput}>
    <p>{props.output}</p>
    
  </div>
);

export default ImageOutput;