import React from 'react';
import '../App.css';

function MyPixel({mySize}){

    
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

    function fixMyColor(element) {
        let myElement=document.getElementById(element.index)
        console.log(myElement)
        myElement.setAttribute("class","red")
        
        
        
    }
   
    //document.getElementById("{element.toString()}").backgroundColor='yellow';

return(
    myArray.map((element)=>
    <button onMouseOver={()=>{fixMyColor(element)}} className={element.myColor} id={element.index} key={element.index} style={{height:500/mySize,width:500/mySize}}/>
    )
)
}

export default MyPixel;