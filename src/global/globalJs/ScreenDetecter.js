import { useState } from "react";

function ScreenDetecter() {
    const [screenWidth,setScreenWidth]= useState();

    window.addEventListener('resize',()=>{
        setScreenWidth(window.screen.width);
    });
    return screenWidth
}

export default ScreenDetecter