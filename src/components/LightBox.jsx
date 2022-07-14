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
    lightboxWindow.style.opacity="1";
    lightboxWindow.style.zIndex="999";
    console.log(window.innerWidth);
    window.scrollTo(window.innerWidth,window.innerHeight);
}

const closeLightbox=()=>{
    const lightboxWindow= document.querySelector(".lightbox_wrapper");
    lightboxWindow.style.opacity ="0";
    lightboxWindow.style.zIndex="-1";
}

export {LightBox,openLightbox};