import React from 'react';
import './App.css';
import ImportCompoenet from './R018_PropsDataType';

function App() {
  return (
    <div>
      <h1>Start react 200</h1>
      <p> CSS 적용하기</p>
      <ImportCompoenet 
        String = "react"
        Number = {200}
        Boolean = {1==1}
        Array = {[0,1,8]}
        ObjectJson = {{react:"리액트", twohundread:"200"}}
        Function={console.log("FunctionProps : function!")}
        />
    </div>
    );
}


export default App;
 