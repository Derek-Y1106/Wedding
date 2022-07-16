import React from 'react'
import Button from './PosterButton'
import '../../scss/Poster.scss'
import Motto from './Motto'

function Poster() {
  return (
    <div className='poster'>
        <Motto layout="bottom_center" height={"60vh"} color="white" content={"”I fell in love with her courage, her sincerity, and her flaming self respect. And it’s these things I’d believe in, even if the whole world indulged in wild suspicions that she wasn’t all she should be. I love her and it is the beginning of everything.”"} background_img={"/photos/Wedding8.jpg"}/>
        
        <div className="button_wrapper">
            <div className='poster_button center_center'>
            <Button width={"50vw"} content={"MR"} background_img={"/photos/Wedding18.jpg"} color='white'></Button>
            <Button width={"50vw"} content={"MRS"} background_img={"/photos/Wedding15.jpg"} color='white'></Button>
            </div>
        </div>
    </div>
  )
}

export default Poster