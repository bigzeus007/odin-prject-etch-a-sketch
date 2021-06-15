import { render } from '@testing-library/react';
import React from 'react';
import { useState } from 'react';
import '../App.css';

function MyPixel({mySize}){


   
    
    const [myStart,setStart]=useState(false)

    

 
    function mySetHover(){
    myStart===false? setStart(true):setStart(false)
    }
    const myChoosenColor=[]
    function myHover(element) {
        element.myChoosenColor='black'

    }
  

    const myArray=[]
    myArray.length=Math.pow(mySize,2)
    for (let index = 0; index < myArray.length; index++) {
        myArray[index]={ 
            index:index,
            myChoosenColor: myChoosenColor[index]
        };
        
    }

return(
    myArray.map((element)=>
    <button onMouseOver={()=>{myHover(element);console.log(element);}} className='myCell' key={element.toString()} className={"monTableau"} style={{height:500/mySize,width:500/mySize,backgroundColor:element.myChoosenColor}}/>)

)
}

export default MyPixel;