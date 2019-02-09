import React from 'react';
import classes from './SplashScreen.css';

const SplashScreen = (props) => {
  return (
    <div className={classes.SplashScreen}>
    <div className={classes.splashText}>{props.splashText}</div>
    <div className={classes.Images}>
    <div className={classes.Image}><img src={props.splashImage1}/></div>
    <div ><img src={props.splashImage2}/></div>
    </div>
    </div>
  );
};

export default SplashScreen;