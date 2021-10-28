
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

  workOneTimeline.from("#intro h1:nth-child(1)",{duration:1, alpha:0, xPercent:-10})
  .from("#intro h1:nth-child(2)", {duration:1, alpha:0, xPercent:-10}, "-=0.6");
//   .from("#scroll-button", {duration:1, alpha:0}, "-=0.5");
}

ScrollTrigger.create({
    trigger: "#work-1",
    start: "top 90%",
    end: "bottom 90%",
    animation: workOneTimeline,
    toggleActions: "restart none none none"
    // scrub: 1
    // id: "#work-2",
    // markers: true
  });
 


/* =============
    work-2
============= */

var workTwo = document.querySelector("#work-2");

if(workTwo){
  var workTwoTimeline = gsap.timeline();
  const workTwoTime = 0.5;
  
  // .from(".home",{duration:0.5, alpha:0.8, yPercent:30})
  workTwoTimeline.from("#work-2 div ul li:nth-child(1)", {duration:workTwoTime, alpha:0, x:-30})
                  .from("#work-2 div ul li:nth-child(2)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
                  .from("#work-2 div ul li:nth-child(3)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
                  .from("#work-2 div ul li:nth-child(4)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
                  .from("#work-2 div ul li:nth-child(5)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
                  .from("#work-2 div ul li:nth-child(6)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
                  .from("#work-2 div ul li:nth-child(7)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
                  .from("#work-2 div ul li:nth-child(8)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
                  .from("#work-2 div ul li:nth-child(9)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
                  .from("#work-2 div ul li:nth-child(10)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
                  .from("#work-2 div ul li:nth-child(11)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
                  .from("#work-2 div ul li:nth-child(12)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
                  .from("#work-2 div ul li:nth-child(13)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
                  .from("#work-2 div ul li:nth-child(14)", {duration:workTwoTime, alpha:0, x:-30}, "-=0.08")
  

  ScrollTrigger.create({
      trigger: "#work-2",
      start: "top 90%",
      end: "bottom 90%",
      animation: workTwoTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
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