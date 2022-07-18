import React from 'react'
import Button from '../components/Button'
import Parallax from '../components/Parallax'
import '../scss/Poster.scss'

function Mr() {
  return (
    <div className='mr_page'>
      <div className="layer">
        <Parallax height="100vh" background_img="https://images.pexels.com/photos/753994/pexels-photo-753994.jpeg"/>
        <div className="cube">
          <Button height="200px" width="200px" background_img="https://picsum.photos/700/700" />
        </div>
      </div>
    </div>
  )
}

export default Mr