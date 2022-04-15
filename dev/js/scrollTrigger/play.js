
/* =============
    art
============= */

import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);


var play = document.querySelector("#play");

if(play){
    var playTimeline = gsap.timeline();
    const artTime = 0.5;

    playTimeline.from("#play div ul li:nth-child(1)", {duration:artTime, alpha:0, x:-10})
                .from("#play div ul li:nth-child(2)", {duration:artTime, alpha:0, x:-10}, "-=0.08")
                .from("#play div ul li:nth-child(3)", {duration:artTime, alpha:0, x:-10}, "-=0.08")
                .from("#play div ul li:nth-child(4)", {duration:artTime, alpha:0, x:-10}, "-=0.08")
                .from("#play div ul li:nth-child(5)", {duration:artTime, alpha:0, x:-10}, "-=0.08")
                .from("#play div ul li:nth-child(6)", {duration:artTime, alpha:0, x:-10}, "-=0.08")
}

  





