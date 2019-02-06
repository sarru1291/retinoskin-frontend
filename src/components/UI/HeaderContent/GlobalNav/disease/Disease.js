import React, { Component } from 'react';

class Disease extends Component {
  componentDidMount(){
    console.log(this.props);
    
  }
  render() {
    return (
      <div>
        Disease
      </div>
    );
  }
}

export default Disease;