import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header/>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Layout;