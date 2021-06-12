import {useState} from 'react'
import './App.css';
import MyPixel from './components/MyPixel'




function App(props) {
  const myInput= document.querySelector('.myInput');
  const mySize = 4;
  
 
  return (
    <div className="App">
      <header className="App-header" >
        <input className='myInput' defaultValue={mySize}></input>
        <button className="mySetButton"style={{width:50, height:50}}></button>
        <MyPixel mySize={mySize}></MyPixel>
 
      </header>
    </div>
  );
}

export default App;

