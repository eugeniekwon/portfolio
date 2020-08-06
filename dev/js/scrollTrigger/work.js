
/* =============
    work-1
============= */

var workOneTimeline = gsap.timeline();
workOneTimeline.from("#intro",{duration:1, alpha:0, yPercent:-100})
               .from("#intro-description", {duration:0.5, alpha:0, xPercent:100}, "-=0.5")


ScrollTrigger.create({
    trigger: "#work-1",
    start: "top 20%",
    end: "bottom 20%",
    animation: workTwoTimeline,
    toggleActions: "restart none none none",
    scrub: 1,
    id: "#work-1",
    markers: true
  });


/* =============
    work-2
============= */

var workTwoTimeline = gsap.timeline();
workTwoTimeline.from(".image-container",{duration:1, alpha:1, yPercent:30})


ScrollTrigger.create({
    trigger: "#work-2",
    start: "top 70%",
    end: "bottom 70%",
    animation: workTwoTimeline,
    toggleActions: "restart none none none",
    scrub: 1,
    id: "#work-2",
    markers: true
  });



