import React from 'react'
import '../scss/Cursor.scss'

function Cursor() {
    
    document.addEventListener("mousemove",(e)=>{
        const cursor=document.querySelector(".cursor");
        // if(e.pageY>=0 && e.pageX>=0){
            cursor.style.top=(e.pageY)+"px";
            cursor.style.left=(e.pageX)+"px";
        // }
        // else{
        //     cursor.style.top="-50px";
        //     cursor.style.left="-50px";
        // }
    });

  return (
    <div className='cursor'></div>
  )
}

export default Cursor