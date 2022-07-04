import React from 'react'
// import {CgClose} from 'react-icon/cg'
function LightBox(props) { 
    const showImage=(path)=>{
        const lightboxWindow= document.getElementsByClassName("lightbox_wrapper");
        console.log(path);
        lightboxWindow[0].style.visibility=props.show;
      }

    const closeLightbox=()=>{
        const lightboxWindow= document.getElementsByClassName("lightbox_wrapper");
        lightboxWindow[0].style.visibility ="hidden";
    }
    showImage(props.paths);

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