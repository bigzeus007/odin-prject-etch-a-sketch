import React from 'react';
import '../App.css';

function MyPixel({mySize,myOtherColor}){

    
    const myChoosenColor=[]
    myChoosenColor.length=Math.pow(mySize,2)
    myChoosenColor.fill("green")

    const myArray=[]

    myArray.length=Math.pow(mySize,2)

    for (let index = 0; index < myArray.length; index++) {
        
        myArray[index]={ 
            index:index,
            myColor: myChoosenColor[index]
        };
    }
    
    myOtherColor=(255,255,255)
    function fixMyColor(element) {
        let myElement=document.getElementById(element.index)
        
        myElement.setAttribute("class",myOtherColor)
        
        
        
    }
   
    //document.getElementById("{element.toString()}").backgroundColor='yellow';

return(
    myArray.map((element)=>
    <button onMouseOver={()=>{fixMyColor(element)}} className={element.myColor} id={element.index} key={element.index} style={{height:500/mySize,width:500/mySize}}/>
    )
)
}

export default MyPixel;
