import React, {Component} from 'react'
import './App.css'
import ImportCompoenet from './component/R087_cookieRemove'

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
      return (
          <div>
              <h1>Start React 200!</h1>
              <ImportCompoenet AppProp="200"/>
          </div>
      );
  }
}




export default App;
 