import React from 'react'
import { useState } from 'react';
import '../scss/Hero.scss'

function Hero() {
    const [toggle,setToggle] = useState(false);
    const moveSlider=()=>{
        const getSlider=document.querySelector(".hero_slider");
        setToggle(!toggle);
        console.log(getSlider);
        if(!toggle){
            getSlider.style.transform="translateX(100%)";
        }
        else{
            getSlider.style.transform="translateX(0%)";
        }
    }

  return (
    <div>
        <div className="hero_wrapper">
            <div className="hero">
                <div className="hero_slider">

                </div>
                <div className="arrow_wrapper" >
                    <div className="slide_word">Slide</div>
                    <div className="arrow_left" onClick={moveSlider}></div> 
                    <div className="arrow_right" onClick={moveSlider}></div>
                    <div className="slide_word">Slide</div>
                </div>
                <div className="hero_inner column_center_center">
                    <div className="content">
                        <h1>Marry With Promises</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto perspiciatis debitis necessitatibus! Debitis illo est quam perspiciatis placeat aliquam ut recusandae, maxime hic adipisci veniam dolores rem. Debitis impedit odit, quibusdam alias molestiae eius sed non doloremque laborum animi quae? Error necessitatibus temporibus, similique nisi qui impedit quas quibusdam omnis voluptatum ullam. Natus labore a illo autem fugiat recusandae voluptatibus officiis, possimus excepturi similique cum vel dolores atque ad quo commodi, ex laborum numquam sint? Aliquam, cupiditate id. Assumenda animi, tempore quisquam quam deserunt ducimus, a minus nam similique facere eligendi iure iusto distinctio asperiores necessitatibus, illum quaerat at eum.</p>
                    </div>
                </div>
                <div className="hero_inner column_center_center">
                    <div className="content">
                        <h1>Marry With Promises</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto perspiciatis debitis necessitatibus! Debitis illo est quam perspiciatis placeat aliquam ut recusandae, maxime hic adipisci veniam dolores rem. Debitis impedit odit, quibusdam alias molestiae eius sed non doloremque laborum animi quae? Error necessitatibus temporibus, similique nisi qui impedit quas quibusdam omnis voluptatum ullam. Natus labore a illo autem fugiat recusandae voluptatibus officiis, possimus excepturi similique cum vel dolores atque ad quo commodi, ex laborum numquam sint? Aliquam, cupiditate id. Assumenda animi, tempore quisquam quam deserunt ducimus, a minus nam similique facere eligendi iure iusto distinctio asperiores necessitatibus, illum quaerat at eum.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='test'></div>
    </div>
  )
}

export default Hero