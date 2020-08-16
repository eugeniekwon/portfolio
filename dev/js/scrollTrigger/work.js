
/* =============
    work-1
============= */

var workOneTimeline = gsap.timeline();
workOneTimeline.from("#intro",{duration:1, alpha:0, yPercent:-100})
               .from("#intro-description", {duration:1, alpha:0, xPercent:100}, "-=1")
               .from("#scroll-button", {duration:1, alpha:0}, "-=0.5")


ScrollTrigger.create({
    trigger: "#work-1",
    start: "top 20%",
    end: "bottom 20%",
    animation: workTwoTimeline,
    toggleActions: "restart none none none",
    scrub: 1
    // id: "#work-1",
    // markers: true
  });




/* =============
    work-2
============= */

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