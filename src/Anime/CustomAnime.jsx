import anime from 'animejs';
import { useEffect } from 'react';

export const SeperateText=()=>{
  useEffect(()=>{
    const TargetList=[];
    TargetList.push(document.querySelector('.gallery_cover .gallery .gallery_right_wrapper .bottom_content .content_wrapper p'));
    TargetList.push(document.querySelector('.gallery_cover .gallery .gallery_right_wrapper .bottom_content .content_wrapper h1'));
    TargetList.push(document.querySelector('.hero_wrapper .hero .arrow_wrapper .arrow_inner .slide_word_left'));
    TargetList.push(document.querySelector('.hero_wrapper .hero .arrow_wrapper .arrow_inner .slide_word_right'));  
    
    TargetList.forEach(target => {
      target.innerHTML=target.textContent.replace(/\S/g, "<span>$&</span>");
    });
  },[])
} 
  
export const MoveLeft=(e)=>{
    // const target=document.querySelector("")
    anime({
       targets: e.target ,
       translateX: [0,200] ,
       duration:800,
       easing: 'easeInSine'
    });
}

export const SlideIn=()=>{
  const target=document.querySelectorAll(".hero_wrapper .hero .arrow_wrapper .arrow_inner .slide_word_left span");
  anime({
    targets: target,
    opacity:[0,1],
    translateY: [-100,0] ,
    translateX:[100,0],
    duration:1000,
    easing: 'easeInSine',
    delay:anime.stagger(50)
  });
  
  const target2=document.querySelectorAll(".hero_wrapper .hero .arrow_wrapper .arrow_inner .slide_word_right span");
  anime({
    targets: target2,
    opacity:[0,1],
    translateY: [100,0] ,
    translateX:[100,0],
    duration:1000,
    easing: 'easeInSine',
    delay:anime.stagger(50)
  });
}

export const SlideOut=()=>{
  const target=document.querySelectorAll(".hero_wrapper .hero .arrow_wrapper .slide_word_left span");
  anime({
    targets: target,
    opacity:[1,0],
    translateY: [0,-100] ,
    translateX:[0,100],
    duration:1000,
    easing: 'easeOutSine',
    delay:anime.stagger(50)
  });
  
  const target2=document.querySelectorAll(".hero_wrapper .hero .arrow_wrapper .slide_word_right span");
  anime({
    targets: target2,
    opacity:[1,0],
    translateY: [0,200] ,
    translateX:[0,100],
    duration:2000,
    easing: 'easeOutSine',
    delay:anime.stagger(50)
  });
}