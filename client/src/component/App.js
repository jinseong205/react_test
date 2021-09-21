import React, { Component } from 'react';
import { Route } from "react-router-dom";

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

import reactThrottle from './R095_reactThrottle';
import floatingPopulationList from './Floating_population/floatingPopulationList';
import rechartsSimpleLineChart from './Floating_population/rechartsSimpleLineChart'
import reactProxy from './R109_reactProxy';
import ApiGetJson from './R110_ApiGetJson';
import ApiPostJson from './R111_ApiPostJson'

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/Throttle' component={reactThrottle} />
        <Route path='/floatPopulationList' component={floatingPopulationList} />
        <Route path='/rechartsSimpleLineChart' component={rechartsSimpleLineChart} />
        <Route exact path='/reactProxy' component={reactProxy} />
        <Route exact path='/ApiGetJson' component={ApiGetJson} />
        <Route exact path='/ApiPostJson' component={ApiPostJson} />
        <Footer/>
      </div>
    );
  }
}

export default App;