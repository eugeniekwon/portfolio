// /* =============
//     parallax
// ============= */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var parallax = document.querySelector(".parallax")

if(parallax){
    gsap.to(".parallax",{scrollTrigger:{
        trigger: ".parallax",
        pin: true,
        pinSpacing: false,
        start: "start 76",
        end: "bottom 76"
        // id: "#hero",
        // markers: true
    }})
}

