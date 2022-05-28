
/* =============
    about
============= */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var aboutPage = document.querySelector("#about");


if(aboutPage){
  
  var aboutTimeline = gsap.timeline();
  const iconTime = 0.35;
  const aboutTime = 1;

  aboutTimeline.from("#about div aside img:nth-child(1)",{duration:aboutTime, alpha:0, x:-30})
                .from("#about div article #me",{duration:aboutTime, alpha:0, x:-30}, "-=0.5")
                .from("#about div article #contact-section li:nth-child(1)",{duration:iconTime, alpha:0, x:-10}, "-=0.08")
                .from("#about div article #contact-section li:nth-child(2)",{duration:iconTime, alpha:0, x:-10}, "-=0.08")
                .from("#about div article #contact-section li:nth-child(3)",{duration:iconTime, alpha:0, x:-10}, "-=0.08")
                .from("#about div article #contact-section li:nth-child(4)",{duration:iconTime, alpha:0, x:-10}, "-=0.08")
                .from("#about div article #contact-section li:nth-child(5)",{duration:iconTime, alpha:0, x:-10}, "-=0.08")


                .from("#resume-listing div hr",{duration:iconTime, alpha:0}, "-=0.08")
                .from("#resume-listing div ul li:nth-child(1)",{duration:iconTime, alpha:0, x:-10}, "-=0.08")
                .from("#resume-listing div ul li:nth-child(2)",{duration:iconTime, alpha:0, x:-10}, "-=0.08")
                .from("#resume-listing div ul li:nth-child(3)",{duration:iconTime, alpha:0, x:-10}, "-=0.08")
                .from("#resume-listing div ul li:nth-child(4)",{duration:iconTime, alpha:0, x:-10}, "-=0.08")
                .from("#resume-listing div ul li:nth-child(5)",{duration:iconTime, alpha:0, x:-10}, "-=0.08")
                
}
