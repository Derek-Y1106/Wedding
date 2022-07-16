import React from 'react'
import '../scss/LightBox.scss'

function LightBox(props) {
  return (
    <div>
        <div className="lightbox_wrapper center_center">
            <div className="lightbox center_center">
                <div className='lightbox_inner center_center'>
                    <button onClick={closeLightbox}>X</button>
                    <img className='center_center' src={props.path} alt=""/>                   
                </div>
            </div>
        </div>
    </div>
  )
}
const openLightbox=()=>{
    const lightboxWindow= document.querySelector(".lightbox_wrapper");
    const html= document.querySelector("html");
    lightboxWindow.style.opacity="1";
    lightboxWindow.style.zIndex="999";
    html.style.overflow="hidden";
}

const closeLightbox=()=>{
    const lightboxWindow= document.querySelector(".lightbox_wrapper");
    const html= document.querySelector("html");
    lightboxWindow.style.opacity ="0";
    lightboxWindow.style.zIndex="-1";
    html.style.overflow="visible";
}

export {LightBox,openLightbox};