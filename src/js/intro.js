import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export function intro(){
gsap.registerPlugin(ScrollTrigger)
const frameCount=38
let offsetValue=100

gsap.to('.img', {
    backgroundPosition: (-offsetValue * frameCount) + '%',
    ease: 'steps(' + (frameCount / 2) + ')',  
    scrollTrigger: {
        trigger: '#intro',
        start: 'top top',
        end: '+=' + ((frameCount * offsetValue) / 2),  
        pin: true,
        scrub: true
    }
});
}