import React from 'react'
import Gallery from '../components/Gallery'
import WeddingVideo from '../videos/Wedding2.mp4'
import SunsetRun from '../videos/SunsetRun.mp4'
import '../scss/Home.scss'

function Home() {
  return (
    <div>
      <video className='video1' src={WeddingVideo} autoPlay loop muted></video>
      <video className='video2' src={SunsetRun} autoPlay loop muted></video>
      <Gallery />
    </div>
  )
}

export default Home