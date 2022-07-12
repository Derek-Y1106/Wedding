import React, { useState } from 'react'
import '../scss/Gallery.scss'
import {LightBox, openLightbox} from './LightBox';
import {GiRoyalLove} from "react-icons/gi"

function Gallery() {
    const imageArray =[];
    const [Image,setImage]=useState();
    
    for (let index = 1; index <=18; index++) { 
            imageArray.push("photos/Wedding"+index+".jpg");
            
    }
    const launch_lightbox=(e)=>{
        setImage(e.target.src);
        openLightbox();
    }
  return (
    <div className='gallery_cover y_even'>
       <h1 className='gallery_title center_center'>Gallery</h1>
        <div className="gallery x_even">
            <div className="gallery_side ">
                <div className="side_content column_center_center">
                <div className='side_logo center_center'><GiRoyalLove/></div>
                  <h1> Move on toward New Life</h1>
                  <p>Lorem ipsum dolor sit am consectetur adipisici consectetur adipisici consectetur adipisiciet consectetur adipisicing elit. Voluptas, recusandae?</p>
                </div>
            </div>

            <div className="gallery_img">
              {imageArray.map((photo,index)=>(
                  <div className="img_wrapper">
                    <img src={photo} key={index} alt="" className='images' onClick={launch_lightbox}/>
                  </div>
              )
              )}
              <LightBox path={Image}/>
            </div>
            
        </div>
    </div>
  )
}

export default Gallery