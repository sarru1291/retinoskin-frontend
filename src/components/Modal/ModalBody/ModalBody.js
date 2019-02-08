import React from 'react';
import classes from './ModalBody.css';
const ModalBody = (props) => {
  return (
    <div className={classes.ModalBody} >
          <img src={props.imagePreviewURL} alt="imagePreview"/>
          <p>{props.modelOutput}</p>
          <p>{props.statusText}</p>
    </div>
  );
};

export default ModalBody;