import React from 'react';
import classes from './ImageInput.css';

const ImageInput=(props)=>{
    console.log("imange input imagePreviewURL: "+props.imagePreviewURL);
let imagePreview;
    if(props.imagePreviewURL===''){
        imagePreview=<img src={props.imageDummyURL} onClick={()=>{props.imageClicked()}} alt="capture"></img>;
    }
    else{
        imagePreview=<img src={props.imagePreviewURL} onClick={()=>{props.imageClicked()}} alt="capture"></img>;
    }
        return(
        <div className={classes.ImageInput}>
        {imagePreview}
            {/* <form  method="POST" onFormSubmit={props.uploadHandler} enctype="multipart/form-data"> */}
            <input 
                type="file" 
                alt="imageinput" 
                ref={props.fileInputRef}
                onChange={(e)=>{props.imageSelected(e)}} 
                style={{display:"none"}}
                accept="image/*" 
                />
            {/* <input 
                type="submit" 
                value="Check"  
                className={classes.submitButton}/>
            </form> */}
                <button 
                    className={classes.submitButton} 
                    onClick={()=>{props.uploadHandler(props.headerName)}}
                    >Check</button>
            </div>
)};

export default ImageInput;