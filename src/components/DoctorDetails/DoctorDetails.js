import React from 'react';
import classes from './DoctorDetails.css';
// import Button from '../Buttons/Button';
const DoctorDetails = (props) => {
  return (
    <div className={classes.DoctorDetails}>
      <p>{props.name}</p>
      <p>{props.email}  </p>
      <p>{props.phoneno}  </p>
      <p>{props.address}</p>
      {/* <Button value="mail" onClick={()=>{props.sendsms()}/> */}
      <button 
                    className={classes.submitButton} 
                    onClick={()=>{props.sendMessageHandler(props.email)}}
                    >Send Data</button>
    </div>
  );
};

export default DoctorDetails;