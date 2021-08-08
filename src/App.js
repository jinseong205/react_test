import React from 'react';
import './App.css';
import ImportCompoenet from './R010_Variable';

function App() {
  return (
    <div>
      <h1>Start react 200</h1>
      <p> CSS 적용하기</p>
      <ImportCompoenet prop_value = 'FromApp.js'/>
    </div>
    );
}

export default App;
