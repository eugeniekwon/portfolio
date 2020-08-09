/* =============
    404-Error
============= */

var errorTimeline = gsap.timeline();
errorTimeline.from("#dont-worry",{duration:1, alpha:0})



ScrollTrigger.create({
    trigger: "#error-intro-text",
    start: "top 20%",
    end: "bottom 20%",
    animation: errorTimeline,
    toggleActions: "restart none none none",
    scrub: 1
    // id: "#work-1",
    // markers: true
  });