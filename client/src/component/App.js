import React, {Component} from 'react'
import '../App.css'
import ImportCompoenet from './R087_cookieRemove'
import reactRouter from './R089_reactRouter'
import reactRouter2 from './R089_reactRouter2'
import 'bootstrap/dist/css/bootstrap.css'
import { Route } from 'react-router'

class App extends Component {
  render() {
      return (
          <div>
              <Route exact path='/' component={reactRouter} />
              <Route exact path='/reactRouter2' component={reactRouter2} />
          </div>
      );
  }
}


export default App;
 