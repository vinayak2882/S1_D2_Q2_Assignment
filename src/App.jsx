
import './App.css';
import {useState} from "react";

function App() {

  const arr=[{name:"Services"},{name:"Projects"},{name:"About"}]

  return (
    <div className="App">
      
      <div className='navbar'>
        <div className='brand'><h3>LOGOBAKERY</h3></div>
        <div className='links'>{arr.map((el)=>(<p>{el.name}</p>))}</div>
        <div className='btn'><button className='btncon'>Contact</button></div>
      </div>

    </div>
  );
}

export default App;
