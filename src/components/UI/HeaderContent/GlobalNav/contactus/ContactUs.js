import React, { Component } from 'react';

import classes from './Contactus.css';
class ContactUs extends Component {
  render() {
    return (
      <div className={classes.ContactUs}>
        <h1>Contact Us:</h1>
        <p>Team: Tebraa<br></br>
          Phone no: +919958938566<br></br>
          Email:sarru1291@gmail.com<br></br>
        </p>
      </div>
    );
  }
}

export default ContactUs;