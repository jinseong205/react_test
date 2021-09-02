import React, {Component} from 'react';
import './App.css';
import ImportCompoenet from './StrAddButton';

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
      return (
          <div>
              <h1>Start React 200!</h1>
              <span>{this.props.store.getState().data.str}</span><br/>
              <ImportCompoenet store={this.props.store}/>
          </div>
      );
  }
}


export default App;
 