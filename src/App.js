import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {Route} from 'react-router-dom';
import Main from './components/UI/HeaderContent/GlobalNav/Main/Main';
import AboutUs from './components/UI/HeaderContent/GlobalNav/aboutus/AboutUs';
import Disease from './components/UI/HeaderContent/GlobalNav/disease/Disease';
import ContactUs from './components/UI/HeaderContent/GlobalNav/contactus/ContactUs';

class App extends Component {
  
  render() {
    return (
      <div>
        <Layout>
                  <Route path="/" exact component={Main}/>
                  <Route path="/aboutus" exact component={AboutUs}/>
                  <Route path="/disease" exact component={Disease}/>
                  <Route path="/contactus" exact component={ContactUs}/>
        </Layout> 
      </div>
    );
  }
}

export default App;
