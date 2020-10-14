
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


/* =============
    pages - art - light photo
============= */

var lightPhotoPages = document.querySelector("#light-photo");

if(lightPhotoPages){
    var lightPhotoPagesTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.8;


    lightPhotoPagesTimeline.from("#light-photo #light-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#light-photo #light-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#light-photo #light-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#light-photo #light-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#light-photo #light-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#light-photo #light-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#light-photo #light-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#light-photo #light-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#light-photo #light-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#light-photo #light-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#light-photo #light-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#light-photo #light-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.1")


     ScrollTrigger.create({
      trigger: "#light-photo",
      start: "top 50%",
      end: "bottom 50%",
      animation: lightPhotoPagesTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}

/* =============
    pages - art - little joys
============= */

var littleJoysPages = document.querySelector("#little-joys");

if(littleJoysPages){
    var littleJoysPagesTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.8;


    littleJoysPagesTimeline.from("#little-joys #joy-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#little-joys #joy-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#little-joys #joy-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#little-joys #joy-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#little-joys #joy-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#little-joys #joy-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#little-joys #joy-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#little-joys #joy-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#little-joys #joy-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#little-joys #joy-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#little-joys #joy-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#little-joys #joy-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#little-joys #joy-gallery div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#little-joys #joy-gallery div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#little-joys #joy-gallery div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#little-joys #joy-gallery div ul li:nth-child(11)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#little-joys #joy-gallery div ul li:nth-child(12)", {duration:pageTime, alpha:0},"-=0.1")

     ScrollTrigger.create({
      trigger: "#little-joys",
      start: "top 50%",
      end: "bottom 50%",
      animation: littleJoysPagesTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}



/* =============
    pages - art - portraits
============= */

var portraitsPages = document.querySelector("#portraits");

if(portraitsPages){
    var portraitsPagesTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.8;


    portraitsPagesTimeline.from("#portraits #portraits-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#portraits #portraits-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#portraits #portraits-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#portraits #portraits-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#portraits #portraits-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#portraits #portraits-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#portraits #portraits-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#portraits #portraits-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#portraits #portraits-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#portraits #portraits-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#portraits #portraits-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#portraits #portraits-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#portraits #portraits-gallery div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#portraits #portraits-gallery div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.1")


     ScrollTrigger.create({
      trigger: "#portraits",
      start: "top 50%",
      end: "bottom 50%",
      animation: portraitsPagesTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}

/* =============
    pages - art - street photo
============= */

var streetPhotoPages = document.querySelector("#street-photo");

if(streetPhotoPages){
    var streetPhotoPagesTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.8;


    streetPhotoPagesTimeline.from("#street-photo #street-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#street-photo #street-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#street-photo #street-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#street-photo #street-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#street-photo #street-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#street-photo #street-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#street-photo #street-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#street-photo #street-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#street-photo #street-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#street-photo #street-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#street-photo #street-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#street-photo #street-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.1")

     ScrollTrigger.create({
      trigger: "#portraits",
      start: "top 50%",
      end: "bottom 50%",
      animation: streetPhotoPagesTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}




/* =============
    pages - work - aesop
============= */

var aesopPage = document.querySelector("#aesop");

if(aesopPage){
    var aesopTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    aesopTimeline.from("#aesop #aesop-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#aesop #aesop-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#aesop #aesop-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#aesop #aesop-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#aesop #aesop-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#aesop #aesop-main-work div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#aesop #aesop-main-work div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#aesop #aesop-gallery-1 div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#aesop #aesop-gallery-1 div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#aesop #aesop-gallery-2 div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#aesop #aesop-gallery-2 div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#aesop #aesop-gallery-2 div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")

     ScrollTrigger.create({
      trigger: "#aesop",
      start: "top 50%",
      end: "bottom 50%",
      animation: aesopTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}

/* =============
    pages - work - bodoni
============= */

var bodoniPage = document.querySelector("#bodoni");

if(bodoniPage){
    var bodoniTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    bodoniTimeline.from("#bodoni #bodoni-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#bodoni #bodoni-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#bodoni #bodoni-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#bodoni #bodoni-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#bodoni #bodoni-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#bodoni #bodoni-main-work div", {duration:pageTime, alpha:0},"-=0.1")
                 .from("#bodoni #bodoni-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#bodoni #bodoni-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#bodoni #bodoni-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
  

     ScrollTrigger.create({
      trigger: "#bodoni",
      start: "top 50%",
      end: "bottom 50%",
      animation: bodoniTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}

/* =============
    pages - work - copenhagen
============= */

var copenhagenPage = document.querySelector("#copenhagen");

if(copenhagenPage){
    var copenhagenTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    copenhagenTimeline.from("#copenhagen #copenhagen-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#copenhagen #copenhagen-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#copenhagen #copenhagen-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#copenhagen #copenhagen-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#copenhagen #copenhagen-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#copenhagen #copenhagen-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#copenhagen #copenhagen-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#copenhagen #copenhagen-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
  

     ScrollTrigger.create({
      trigger: "#copenhagen",
      start: "top 50%",
      end: "bottom 50%",
      animation: copenhagenTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}

/* =============
    pages - work - home kitchen
============= */

var homeKitchenPage = document.querySelector("#home-kitchen");

if(homeKitchenPage){
    var homeKitchenTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    homeKitchenTimeline.from("#home-kitchen #home-kitchen-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#home-kitchen #home-kitchen-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#home-kitchen #home-kitchen-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#home-kitchen #home-kitchen-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#home-kitchen #home-kitchen-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#home-kitchen #home-button a", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#home-kitchen #home-kitchen-main-screenshot div", {duration:pageIntroTime, alpha:0})
                 .from("#home-kitchen #home-kitchen-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#home-kitchen #home-kitchen-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#home-kitchen #home-kitchen-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#home-kitchen #home-kitchen-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#home-kitchen #home-kitchen-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#home-kitchen #home-kitchen-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#home-kitchen #home-kitchen-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#home-kitchen #home-kitchen-gallery-process div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#home-kitchen #home-kitchen-gallery-process div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#home-kitchen #home-kitchen-gallery-process div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")

     ScrollTrigger.create({
      trigger: "#home-kitchen",
      start: "top 50%",
      end: "bottom 50%",
      animation: homeKitchenTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}


/* =============
    pages - work - luis barragan
============= */

var luisBarraganPage = document.querySelector("#luis-barragan");

if(luisBarraganPage){
    var luisBarraganTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    luisBarraganTimeline.from("#luis-barragan #luis-barragan-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#luis-barragan #luis-barragan-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#luis-barragan #luis-barragan-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#luis-barragan #luis-barragan-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#luis-barragan #luis-barragan-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#luis-barragan #luis-barragan-main-work div", {duration:pageIntroTime, alpha:0})
                 .from("#luis-barragan #luis-barragan-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#luis-barragan #luis-barragan-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#luis-barragan #luis-barragan-sketches div", {duration:pageTime, alpha:0},"-=0.01")


     ScrollTrigger.create({
      trigger: "#luis-barragan",
      start: "top 50%",
      end: "bottom 50%",
      animation: luisBarraganTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}


/* =============
    pages - work - mahler
============= */

var gustavMahlerPage = document.querySelector("#gustav-mahler");

if(gustavMahlerPage){
    var gustavMahlerTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    gustavMahlerTimeline.from("#gustav-mahler #gustav-mahler-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                        .from("#gustav-mahler #gustav-mahler-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                        .from("#gustav-mahler #gustav-mahler-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                        .from("#gustav-mahler #gustav-mahler-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                        .from("#gustav-mahler #gustav-mahler-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                        .from("#gustav-mahler #gustav-mahler-main-work div", {duration:pageIntroTime, alpha:0})
                        .from("#gustav-mahler #gustav-mahler-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                        .from("#gustav-mahler #gustav-mahler-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                        // .from("#gustav-mahler #gustav-mahler-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                        .from("#gustav-mahler #gustav-mahler-sketches div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                        .from("#gustav-mahler #gustav-mahler-sketches div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                        .from("#gustav-mahler #gustav-mahler-sketches div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                        .from("#gustav-mahler #gustav-mahler-sketches div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")


     ScrollTrigger.create({
      trigger: "#gustav-mahler",
      start: "top 50%",
      end: "bottom 50%",
      animation: gustavMahlerTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}


/* =============
    pages - work - ocean dumping
============= */

var oceanDumpingPage = document.querySelector("#ocean-dumping");

if(oceanDumpingPage){
    var oceanDumpingTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    oceanDumpingTimeline.from("#ocean-dumping #ocean-dumping-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#ocean-dumping #ocean-dumping-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#ocean-dumping #ocean-dumping-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#ocean-dumping #ocean-dumping-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#ocean-dumping #ocean-dumping-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#ocean-dumping #ocean-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#ocean-dumping #ocean-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#ocean-dumping #ocean-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#ocean-dumping #ocean-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")

     ScrollTrigger.create({
      trigger: "#ocean-dumping",
      start: "top 50%",
      end: "bottom 50%",
      animation: oceanDumpingTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}


/* =============
    pages - work - perused
============= */

var perusedPage = document.querySelector("#perused");

if(perusedPage){
    var perusedTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    perusedTimeline.from("#perused #perused-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#perused #perused-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#perused #perused-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#perused #perused-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#perused #perused-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#perused #perused-definition h2", {duration:pageTime, alpha:0},"definition")
                 .from("#perused #perused-definition p", {duration:pageTime, alpha:0},"definition")

                 .from("#perused #perused-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#perused #flipsnack-link a", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #p-colour-palette div ul li", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#perused #perused-gallery-process-1 div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery-process-1 div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery-process-1 div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery-process-1 div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery-process-1 div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery-process-1 div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery-process-1 div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 

     ScrollTrigger.create({
      trigger: "#perused",
      start: "top 50%",
      end: "bottom 50%",
      animation: perusedTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}

/* =============
    pages - work - philly flower
============= */

var phillyFlowerPage = document.querySelector("#philly-flower");

if(phillyFlowerPage){
    var phillyFlowerTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    phillyFlowerTimeline.from("#philly-flower #philly-flower-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#philly-flower #philly-flower-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#philly-flower #philly-flower-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#philly-flower #philly-flower-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#philly-flower #philly-flower-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#philly-flower #philly-button a", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#philly-flower #philly-flower-main-screenshot div", {duration:pageTime, alpha:0})

                 .from("#philly-flower #philly-flower-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#philly-flower #philly-flower-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#philly-flower #philly-flower-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#philly-flower #philly-flower-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#philly-flower #philly-ui-kit div", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#philly-flower #philly-flower-gallery-process div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#philly-flower #philly-flower-gallery-process div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#philly-flower #philly-flower-gallery-process div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")

     ScrollTrigger.create({
      trigger: "#philly-flower",
      start: "top 50%",
      end: "bottom 50%",
      animation: phillyFlowerTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}


/* =============
    pages - work - woodmere
============= */

var woodmerePage = document.querySelector("#woodmere");

if(woodmerePage){
    var woodmereTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    woodmereTimeline.from("#woodmere #woodmere-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#woodmere #woodmere-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#woodmere #woodmere-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#woodmere #woodmere-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#woodmere #woodmere-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})

                 .from("#woodmere #woodmere-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#woodmere #woodmere-gallery-process-1 div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery-process-1 div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery-process-2 div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery-process-2 div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery-process-2 div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")


     ScrollTrigger.create({
      trigger: "#woodmere",
      start: "top 50%",
      end: "bottom 50%",
      animation: woodmereTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}


  









  





