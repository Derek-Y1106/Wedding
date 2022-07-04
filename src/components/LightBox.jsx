import React from 'react'
// import {CgClose} from 'react-icon/cg'
function LightBox(props) { 
    console.log(props.paths);

    // const showImage=()=>{
    //     const images= document.getElementsByClassName("gallery img");
  
    //     console.log(images);
    //   }

    const closeLightbox=()=>{
        const lightboxWindow= document.getElementsByClassName("lightbox_wrapper");
        lightboxWindow.style.visibility ='hidden';
    }

  return (
    <div>
        <div className="lightbox_wrapper center_center">
            <div className="lightbox">
                {/* close Icon */}
                <button onClick={closeLightbox}>X</button>
                <img src="https://picsum.photos/id/684/2000/1400" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default LightBox