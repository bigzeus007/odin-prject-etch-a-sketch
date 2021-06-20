import React, { useState } from 'react';
import '../App.css';


function MyPixel({mySize,myOtherColor}){

    const [isWrite,setIsWriting]=useState(false)
    const myChoosenColor=[]
    myChoosenColor.length=Math.pow(mySize,2)
    myChoosenColor.fill("")

    const myArray=[]

    myArray.length=Math.pow(mySize,2)

    for (let index = 0; index < myArray.length; index++) {
        
        myArray[index]={ 
            index:index,
            myColor: myChoosenColor[index]
        };
    }
    
    
    function fixMyColor(element) {
        let myElement=document.getElementById(element.index)
        myElement.style.backgroundColor=myOtherColor
        
    }
   //myElement.setAttribute("class",myOtherColor)
   
return(
    myArray.map((element)=>
    <button onClick={()=>{setIsWriting(!isWrite)}} onMouseOver={()=>{isWrite? fixMyColor(element):clearTimeout()}} className={element.myColor} id={element.index} key={element.index} style={{height:500/mySize,width:500/mySize}}/>
    )
)
}

export default MyPixel;
