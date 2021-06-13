import {useState} from 'react'
import MyPixel from './components/MyPixel';




function App(props) {
  const myValue=document.getElementsByTagName('input');
  
  const [mySize,setSize] = useState(4);

  function changeSize(x){
    
    setSize(x);

  }


  
  
 
  return (
    <div className="App">
      <header className="App-header" >
      <div className="monTab" style={{width:500, height:550}}>
        <input type='number' min={0} max={10} className='myInput' style={{height:50, width:250}} defaultValue={4}></input>
        <button onClick={()=>console.log(myValue)} className="SetSize" style={{height:55, width:200,backgroundColor:'green'}} ></button>
        <MyPixel mySize={mySize}></MyPixel>
        </div>
      </header>
    </div>
  );
}

export default App;

