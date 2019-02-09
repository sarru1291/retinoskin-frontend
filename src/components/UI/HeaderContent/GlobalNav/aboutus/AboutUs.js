import React, { Component } from 'react';
import classes from './AboutUs.css';
class AboutUs extends Component {
  render() {
    return (
      <div className={classes.AboutUs}>
        <h1>About us</h1>
        <p>
          Sarvottam Kumar<br></br>
          BVCOE (New Delhi)
        </p>
        <p>
          Saurav Ghosh<br></br>
          BVCOE (New Delhi)
        </p>
      </div>
    );
  }
}

export default AboutUs;