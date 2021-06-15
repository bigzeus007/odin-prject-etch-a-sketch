import {useState} from 'react'
import MyPixel from './components/MyPixel';


//

function App() {
 
  const [mySize,setSize] = useState(4);

  return (
    <div className="App">
      <header className="App-header" >
      <div className="monTab" style={{width:500, height:550}}>
        <input id="setMyInputValue" type='number' min={0} max={100} className='myInput' style={{height:50, width:250}} defaultValue={mySize}></input>
        <button   onClick={()=>setSize(document.getElementById('setMyInputValue').value)}  className="SetSize" style={{height:55, width:240,backgroundColor:'green'}} ></button>
        <MyPixel mySize={mySize}></MyPixel>
        </div>
      </header>
    </div>
  );
}

export default App;

