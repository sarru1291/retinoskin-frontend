import React from 'react';
import classes from './ModalBody.css';
// import TextFileReader from '../../TextFileReader/TextFileReader';
// import preventioncausesRetinopathy from '../../../assets/texts/preventioncausesRetinopathy.txt';
// import preventionCausesSkincancer from '../../../assets/texts/preventioncausesSkincancer.txt';
const ModalBody = (props) => {
  console.log(props);
  // var preventionCauses;
  // if (props.diseaseTitle==='retinopathy') {
  //   preventionCauses=<TextFileReader txt={preventioncausesRetinopathy}/>
  // } else if(props.diseaseTitle==='skincancer') {
  //   preventionCauses=<TextFileReader txt={preventionCausesSkincancer}/>
  // }else{

  // }
  return (
    <div className={classes.ModalBody} >
          
          <img src={props.imagePreviewURL} alt="imagePreview"/>
          <span className={classes.modelOutput}>{props.modelOutput}</span>
          <p className={classes.statusText}>{props.statusText}</p>
          {/* {props.linkPC} */}
    </div> 
   
  );
};

export default ModalBody;