import React, { useState } from 'react'
import '../scss/Gallery.scss'
import {LightBox, openLightbox} from './LightBox';
import {GiRoyalLove} from "react-icons/gi";
import {MoveLeft,Span} from "../Anime/CustomAnime";

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
        <div className="gallery x_even">
            <div className="gallery_side ">
                <div className="side_content column_top_center">
                <div className='side_logo'><GiRoyalLove/></div>
                  <h1> Move on toward New Life</h1>
                  <p>Lorem ipsum dolor sit am consectetur adipisicing elit. Voluptas, recusandae?</p>
                </div>
            </div>

            <div className="gallery_right_wrapper y_even">
              <div className="gallery_img">
                {imageArray.map((photo,index)=>(
                    <div className="img_wrapper" key={index}>
                      <img src={photo} key={index} alt="" className='images' onClick={launch_lightbox}/>
                    </div>
                )
                )}
                </div>
                <LightBox path={Image}/>
                
                <div className="bottom_content column_center_right">
                  <div className="content_wrapper">
                    <h1 onMouseEnter={MoveLeft}>Lorem ipsum dolor sit amet consectetur </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet sunt nihil esse ipsa exercitationem corrupti quod amet.</p>
                  </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Gallery