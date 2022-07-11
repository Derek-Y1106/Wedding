import React from 'react'
import Gallery from '../components/Gallery'
import WeddingVideo from '../videos/Wedding2.mp4'
import '../scss/Home.scss'

function Home() {
  return (
    <div className='Home'>
      <div className="video_wrapper">
         <video src={WeddingVideo} autoPlay loop muted></video>
      </div>
      <Gallery />
    </div>
  )
}

export default Home