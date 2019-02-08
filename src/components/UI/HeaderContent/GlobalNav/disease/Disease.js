import React, { Component } from 'react';
import skincancertxt from '../../../../../assets/texts/skincancer.txt';

import retinopathytxt from '../../../../../assets/texts/retinopathy.txt';
import TextFileReader from '../../../../TextFileReader/TextFileReader';
import classes from './Disease.css';

class Disease extends Component {
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <div className={classes.Disease}>
       <h1>Skin Cancer</h1> <TextFileReader txt={skincancertxt}/>
       <h1>Diabetic Retinopathy</h1><TextFileReader txt={retinopathytxt}/>
      </div>
    );
  }
}

export default Disease;