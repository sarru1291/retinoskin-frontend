import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';
import Offline from '../../components/Offline/Offline';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import SplashImage from '../../assets/photos/splashimage.jpeg';
class Layout extends Component {
 state={
   splashScreen:true,
   splashText:'Welcome to RetinoSkin'
 }

  render() {
    var opt;
    if(!navigator.onLine){
      opt=<Offline/>;
    }
    setTimeout(() => {
      {this.setState({splashScreen:false})}
    }, 3000);
    if (this.state.splashScreen) {
      opt=<SplashScreen splashImage={SplashImage} splashText={this.state.splashText}/>
    }else{
        opt=<div><Header/>{this.props.children}<Footer/></div>;
    }
    return (
      <div>
        {opt}
      </div>
    );
  }
}

export default Layout;