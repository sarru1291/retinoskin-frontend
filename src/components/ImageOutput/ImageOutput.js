import React from 'react';
import classes from './ImageOutput.css';

const ImageOutput=(props)=>(
  <div className={classes.ImageOutput}>
    <h1>{props.output}</h1>
  </div>
);

export default ImageOutput;