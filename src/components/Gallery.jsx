import React from 'react'
import '../scss/Gallery.scss'
import LightBox from './LightBox';

function Gallery() {
    
    const imageArray =[];

    const launch_lightbox=(e)=>{
        const paths=e.target.src
        return(
            <>
                <LightBox path={paths} show={"visible"}/>
            </>
        
        )
        
    }

    for (let index = 1; index <=18; index++) { 
        imageArray.push("photos/Wedding"+index+".jpg");
        
    }
      
  return (
    <div className='gallery_cover'>
       <h1 className='center_center'>Gallery</h1>
        <div className="gallery">
            {imageArray.map((photo,index)=>(
                <img src={photo} key={index} alt="" className='images' onClick={launch_lightbox}/>
            )
            )}
        </div>
    </div>
  )
}

export default Gallery