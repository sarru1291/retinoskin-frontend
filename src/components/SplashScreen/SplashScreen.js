import React from 'react';
import classes from './SplashScreen.css';
const SplashScreen = (props) => {
  return (
    <div className={classes.SplashScreen}>
    <span>{props.splashText}</span>
        <img src={props.splashImage}/>
    </div>
  );
};

export default SplashScreen;