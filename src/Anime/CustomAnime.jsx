import anime from 'animejs';
import { useEffect } from 'react';

export const Span=()=>{
  useEffect(()=>{
    const target=document.querySelector('.gallery_cover .gallery .gallery_right_wrapper .bottom_content .content_wrapper p');
    target.innerHTML=target.textContent.replace(/\S/g, "<span>$&</span>");
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
