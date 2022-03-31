
/* =============
    art
============= */

import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);


var art = document.querySelector("#art");

if(art){
    var artTimeline = gsap.timeline();
    const artTime = 0.5;

    artTimeline.from("#art div ul li:nth-child(1)", {duration:artTime, alpha:0, x:-10})
                .from("#art div ul li:nth-child(2)", {duration:artTime, alpha:0, x:-10}, "-=0.08")
                .from("#art div ul li:nth-child(3)", {duration:artTime, alpha:0, x:-10}, "-=0.08")
                .from("#art div ul li:nth-child(4)", {duration:artTime, alpha:0, x:-10}, "-=0.08")
                .from("#art div ul li:nth-child(5)", {duration:artTime, alpha:0, x:-10}, "-=0.08")
}

  





