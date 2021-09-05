import React, {Component} from 'react'
import './App.css'
import {connect} from 'react-redux'
import ImportCompoenet from './StrAddButton'

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
      return (
          <div>
              <h1>Start React 200!</h1>
              {/* <span>{this.props.store.getState().data.str}</span><br/> */}
              <span>{this.props.str}</span><br/>
              {/* <ImportCompoenet store={this.props.store}/> */}
              <ImportCompoenet AppProp="200"/>
          </div>
      );
  }
}

let mapStateToProps = (state, props) =>{
    console.log('Props from index.js : ' + props.indexProp)
    return {
        str : state.data.str,
    }
}

App = connect(mapStateToProps, null)(App);


export default App;
 