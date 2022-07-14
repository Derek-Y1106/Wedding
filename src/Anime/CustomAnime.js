import anime from 'animejs/lib/anime.es.js';

export const MoveLeft=(e)=>{
    const target=document.querySelector("")
    anime({
       targets: e.target ,
       translateX: [0,200] ,
       duration: 1000,
       easing: 'easeInSine'
    });



    
}