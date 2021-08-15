import React from 'react';
import './App.css';
import ImportCompoenet from './R022_PropsDefault';

function App() {
  return (
    <div>
      <h1>Start react 200</h1>
      <p> CSS 적용하기</p>
      <ImportCompoenet 
         ReactNumber={200}
       />
    </div>
    );
}


export default App;
 