import React from 'react'
import '../scss/Gallery.scss'
function Gallery() {
    
    const imageArray =[];
    
    for (let index = 1; index <=18; index++) { 
        imageArray.push("photos/Wedding"+index+".jpg");
        
    }

  return (
    <div className='gallery_cover'>
       <h1 className='center_center'>Gallery</h1>
        <div className="gallery">
            {imageArray.map((photo,index)=>(
                <img src={photo} key={index} alt="" className='images' />
            )
            )}
        </div>
    </div>
  )
}

export default Gallery