import React from 'react';
import classes from './Offline.css';

const Offline = (props) => {
  return (
    <div className={classes.Offline}>
      <p>You are not connected to internet.</p>
    </div>
  );
};

export default Offline;