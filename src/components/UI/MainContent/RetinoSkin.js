import React from 'react';
import RetinoSkinHeader from '../MainContent/RetinoSkinHeader/RetinoSkinHeader';
import classes from './RetinoSkin.css';
import RetinoSkinContent from '../MainContent/RetinoSkinContent/RetinoSkinContent';

const RetinoSkin=(props)=>(
  <div className={classes.RetinoSkin}>
    <RetinoSkinHeader 
        imageURL={props.imageURL} 
        headerName={props.headerName} />
    <RetinoSkinContent/>
  </div>
);

export default RetinoSkin;