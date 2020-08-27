
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// console.log("from work");


/* =============
    work-1
============= */

var workOne = document.querySelector("#work-1");


if(workOne){
  
  var workOneTimeline = gsap.timeline();

  workOneTimeline.from("#intro",{duration:1, alpha:0, yPercent:-100})
  .from("#intro-description", {duration:1, alpha:0, xPercent:100}, "-=1")
  .from("#scroll-button", {duration:1, alpha:0}, "-=0.5");
}

 


/* =============
    work-2
============= */

var workTwo = document.querySelector("#work-2");

if(workTwo){
  var workTwoTimeline = gsap.timeline();
  workTwoTimeline.from(".home",{duration:0.5, alpha:0.8, yPercent:30})

  ScrollTrigger.create({
      trigger: "#work-2",
      start: "top 90%",
      end: "bottom 90%",
      animation: workTwoTimeline,
      toggleActions: "restart none none none",
      scrub: 1
      // id: "#work-2",
      // markers: true
    });
}





/* =============
    content scroll
============= */

// var contentTimeline = gsap.timeline();
// contentTimeline.from(".scroll-info",{duration:0.5, alpha:0.8, yPercent:80})


// ScrollTrigger.create({
//     trigger: ".scroll-content",
//     start: "top 90%",
//     end: "bottom 90%",
//     animation: contentTimeline,
//     toggleActions: "restart none none none",
//     scrub: 1
//     // id: "#work-2",
//     // markers: true
//   });