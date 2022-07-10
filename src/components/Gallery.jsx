import React, { useState } from 'react'
import '../scss/Gallery.scss'
import {LightBox, openLightbox} from './LightBox';

function Gallery() {
    const imageArray =[];
    const [Image,setImage]=useState();
    // const [Image,setImage]=useState();
    
    for (let index = 1; index <=18; index++) { 
            imageArray.push("photos/Wedding"+index+".jpg");
            
    }
    const launch_lightbox=(e)=>{
        setImage(e.target.src);
        openLightbox();
    }
  return (
    <div className='gallery_cover'>
       <h1 className='gallery_title center_center'>Gallery</h1>
        <div className="gallery">
            {imageArray.map((photo,index)=>(
                <img src={photo} key={index} alt="" className='images' onClick={launch_lightbox}/>
            )
            )}
            <LightBox path={Image}/>
        </div>
    </div>
  )
}

export default Gallery