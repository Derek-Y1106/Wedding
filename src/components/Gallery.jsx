import React from 'react'
import '../scss/Gallery.scss'
import LightBox from './LightBox';

function Gallery() {
    
    const imageArray =[];
    
    for (let index = 1; index <=18; index++) { 
        imageArray.push("photos/Wedding"+index+".jpg");
        
    }
   const showImage=()=>{
        const images= document.getElementsByClassName("gallery img");
  
        console.log(images);
      }
      
  return (
    <div className='gallery_cover'>
       <h1 className='center_center'>Gallery</h1>
        <div className="gallery">
            {imageArray.map((photo,index)=>(
                <img src={photo} key={index} alt="" className='images' onClick={() => {<LightBox path={photo}/>}}/>
            )
            )}
        </div>
    </div>
  )
}

export default Gallery