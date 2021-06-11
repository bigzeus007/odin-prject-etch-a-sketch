import {useState} from 'react'
import reactDom from 'react-dom';
import './App.css';



function MyTabSize(props){
  props={
    mySize:"mySize",
    
  }

const myIndex = 6;
const myArray = [];

myArray.length=myIndex*myIndex;

const [cellule,setColor]=useState({
  backgroundColor: "blue",
})
for (let index = 0; index < myArray.length; index++) {
  myArray[index]=<button key={index.toString() } style={{width:500/myIndex,height:500/myIndex,backgroundColor:myColor}} onClick={()=>props{...{backgroundColor:"red"}}}></button>
 // myArray[index]=<button key={index.toString() }  onClick={()=>console.log(myArray[index].props.style.backgroundColor)} style={{width:500/myIndex,height:500/myIndex,backgroundColor:'blue'}} ></button>
  
}


// {myArray.map(x=> <button onMouseEnter={()=>console.log()} style={{width:500/myIndex,height:500/myIndex}} key={x.toString()}></button>)}

return(
  <div className="monTab" >
  {myArray}
  </div>
);
}


function App() {
  props={
  mySize:6,
  myCell:index,
  myColor:'red'
} 
  return (
    <div className="App">
      <header className="App-header" >
        <input value={mySize}>Table Size</input>
        <MyTabSize myDimension={mySize} children={myCell} />
 
      </header>
    </div>
  );
}

export default App;

