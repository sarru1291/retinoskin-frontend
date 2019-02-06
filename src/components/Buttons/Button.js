import React from 'react';
import  './Button.css';

const Button=(props)=>(
  <div >
    <button>{props.value}</button>
  </div>
);

export default Button;