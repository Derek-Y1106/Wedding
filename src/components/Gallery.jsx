import React from 'react'
import '../scss/Gallery.scss'
import LightBox from './LightBox';

function Gallery() {
    
    const imageArray =[];

    const passProps=(e)=>{
        const paths=e.target.src
        return(<LightBox path={paths}/>)
        
        
    }

    for (let index = 1; index <=18; index++) { 
        imageArray.push("photos/Wedding"+index+".jpg");
        
    }
      
  return (
    <div className='gallery_cover'>
       <h1 className='center_center'>Gallery</h1>
        <div className="gallery">
            {imageArray.map((photo,index)=>(
                <img src={photo} key={index} alt="" className='images' onClick={passProps}/>
            )
            )}
        </div>
    </div>
  )
}

export default Gallery