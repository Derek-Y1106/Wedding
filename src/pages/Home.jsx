import React from 'react'
import Gallery from '../components/Gallery'
import WeddingVideo from '../videos/Wedding2.mp4'
import '../scss/Home.scss'

function Home() {
  return (
    <div>
      <video className='video1' src={WeddingVideo} autoPlay loop muted></video>
      <Gallery />
    </div>
  )
}

export default Home