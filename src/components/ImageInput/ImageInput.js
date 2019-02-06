import React from 'react';
import classes from './ImageInput.css';

const ImageInput=(props)=>(
  <div className={classes.ImageInput}>
  <img src={props.imageDummyURL} onClick={props.imageClicked} alt="capture"></img>
    {/* <form  method="GET" onFormSubmit={props.uploadHandler} enctype="multipart/form-data"> */}
      <input 
          type="file" 
          alt="imageinput" 
          ref={props.fileInputRef}
          onChange={props.imageSelected} 
          style={{display:"none"}}
          name="image" 
          accept="image/*" 
        //   required
          />
      {/* <input 
          type="submit" 
          value="Check"  
          className={classes.submitButton}/>
    </form> */}
        <button className={classes.submitButton} onClick={props.uploadHandler}>Check</button>
    </div>
);

export default ImageInput;