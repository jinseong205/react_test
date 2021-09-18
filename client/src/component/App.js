import React, { Component } from 'react';
import { Route } from "react-router-dom";
import InnerComponent from './R095_reactThrottle';

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';
// footer
import Footer from './Footer/Footer';
//login
import LoginForm from './LoginForm';
import R094_reactDebounce from './R094_reactDebounce';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
        <Route exact path = '/' component={LoginForm} />
        <Route exact path = '/throttle' component={InnerComponent} />
        <Footer/>
      </div>
    );
  }
}

export default App;