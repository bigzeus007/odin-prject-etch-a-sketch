import { Color } from '@svgdotjs/svg.js';
import React from 'react';

function MaColaris(myOtherColor,setMyOtherColor){

 

        return (
            <>
        <input onChange={(e)=>{console.log(e.target.value)}} id="myColor" type="color" value="#ff0000"/>
        <div> </div>
        </>);
    }
export default MaColaris;