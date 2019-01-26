import React from 'react';
import classes from './ImageInput.css';
const ImageInput=(props)=>(
  <div className={classes.ImageInput}>
    <form action="#" method="POST">
      <input type="file" alt="imageinput" src="https://img.icons8.com/color/48/000000/xlarge-icons.png" />
      <input type="submit"/>
    </form>
  </div>
);

export default ImageInput;