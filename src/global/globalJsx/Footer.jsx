import React from 'react'
import '../../scss/Footer.scss'

function Footer() {
  const btnScrollToUp=()=>{
    window.scrollTo({
       top:0,
       left:0,
       behavior:"smooth"
    })
  }

  return (
    <div>
      <div className="footer column_bottom_center">
        <div className='arrow_top center_center' onClick={btnScrollToUp}></div>
          <p>&copy; 2022 Wedding_Template Created by Derek Yip. All Right Reserved &copy; </p>
        </div>
    </div>
  )
}

export default Footer