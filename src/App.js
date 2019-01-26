import React, { Component } from 'react';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Main from './containers/Main/Main';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
