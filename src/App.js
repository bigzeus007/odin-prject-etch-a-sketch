import {useState} from 'react'
import './App.css';



function MyTabSize(){

const myIndex = 6;
const myArray = [];
myArray.length=myIndex*myIndex;
myArray.fill(true);
const myChange=
const [myChange,setChange]=useState()



return(
  <div className="monTab" >
  {myArray.map(x=> <span onChange={myChange(this)} style={{width:500/myIndex,height:500/myIndex}} key={x.toString}></span>)
  }
  </div>
);
}


function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <MyTabSize  />
 
      </header>
    </div>
  );
}

export default App;

