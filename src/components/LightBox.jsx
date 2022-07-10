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
    lightboxWindow[0].style.visibility='visible';

}

const closeLightbox=()=>{
    const lightboxWindow= document.getElementsByClassName("lightbox_wrapper");
    lightboxWindow[0].style.visibility ="hidden";
}

export {LightBox,openLightbox};