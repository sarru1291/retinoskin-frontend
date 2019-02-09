import React from 'react';
import classes from './ModalBody.css';
const ModalBody = (props) => {
  console.log(props);
  return (
    <div className={classes.ModalBody} >
          
          <img src={props.imagePreviewURL} alt="imagePreview"/>
          <span className={classes.modelOutput}>{props.modelOutput}</span>
          <p className={classes.statusText}>{props.statusText}</p>
    </div> 
   
  );
};

export default ModalBody;