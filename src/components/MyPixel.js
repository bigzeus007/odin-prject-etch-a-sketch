import { render } from '@testing-library/react';
import React from 'react';
import '../App.css';

function MyPixel({mySize}){
    const myArray=[]
    myArray.length=Math.pow(mySize,2)
    for (let index = 0; index < myArray.length; index++) {
        myArray[index]=index;
        
    }
    
    



return(


    myArray.map((element)=>
    <button className='myCell' key={element.toString()} className={"monTableau"} style={{height:500/mySize,width:500/mySize}}/>)

)
}

export default MyPixel;