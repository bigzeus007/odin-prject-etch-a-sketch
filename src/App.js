import {useState} from 'react'
import './App.css';



function MyTabSize(){

const myIndex = 125;
const myArray = [];
myArray.length=myIndex*myIndex;
myArray.fill(true)



return(
  <div className="monTab" >
  {myArray.map(x=> <span style={{width:500/myIndex,height:500/myIndex}} key={x.toString}></span>)
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

