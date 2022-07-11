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
    const lightboxWindow= document.getElementsByClassName("lightbox_wrapper");
    lightboxWindow[0].style.opacity="1";
    lightboxWindow[0].style.zIndex="3";
}

const closeLightbox=()=>{
    const lightboxWindow= document.getElementsByClassName("lightbox_wrapper");
    lightboxWindow[0].style.opacity ="0";
    lightboxWindow[0].style.zIndex="-1";
}

export {LightBox,openLightbox};