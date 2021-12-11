
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
    pages - art - home
============= */

var homePhotoPages = document.querySelector("#home-photo");

if(homePhotoPages){
    var homePhotoPagesTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.8;


    homePhotoPagesTimeline.from("#home-photo #home-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#home-photo #home-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#home-photo #home-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#home-photo #home-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#home-photo #home-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#home-photo #home-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#home-photo #home-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#home-photo #home-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#home-photo #home-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#home-photo #home-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#home-photo #home-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#home-photo #home-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#home-photo #home-gallery div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#home-photo #home-gallery div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#home-photo #home-gallery div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#home-photo #home-gallery div ul li:nth-child(11)", {duration:pageTime, alpha:0},"-=0.1")
                .from("#home-photo #home-gallery div ul li:nth-child(12)", {duration:pageTime, alpha:0},"-=0.1")

     ScrollTrigger.create({
      trigger: "#home-photo",
      start: "top 50%",
      end: "bottom 50%",
      animation: homePhotoPagesTimeline,
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
                //  .from("#aesop #aesop-gallery-1 div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#aesop #aesop-gallery-1 div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
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
    pages - work - highland orchards
============= */

var highlandOrchardsPage = document.querySelector("#highland-orchards");

if(highlandOrchardsPage){
    var highlandOrchardsTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    highlandOrchardsTimeline.from("#highland-orchards #highland-orchards-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#highland-orchards #highland-orchards-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#highland-orchards #highland-orchards-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#highland-orchards #highland-orchards-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#highland-orchards #highland-orchards-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})

                 .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(11)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(12)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(13)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(14)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(15)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(16)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(17)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(18)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(19)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#highland-orchards #highland-orchards-video", {duration:pageTime, alpha:0},"-=0.01")

                 

                 .from("#highland-orchards #highland-orchards-product div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-product div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-product div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-product div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-product div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")

                .from("#highland-orchards #highland-orchards-product-intro div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                .from("#highland-orchards #highland-orchards-product-intro div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")

                //  .from("#highland-orchards #highland-orchards-gallery div ul li:nth-child(11)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-touchpoint div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-touchpoint div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-touchpoint div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-touchpoint div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-touchpoint div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-touchpoint div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-touchpoint div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-touchpoint div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-touchpoint div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#highland-orchards #highland-orchards-vans div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-vans div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-vans div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#highland-orchards #highland-orchards-applications div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-applications div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-applications div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-applications div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-applications div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-applications div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-applications div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-applications div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-applications div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-applications div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#highland-orchards #highland-orchards-process div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-process div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-process div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#highland-orchards #highland-orchards-process div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-process div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#highland-orchards #highland-orchards-process div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")

                 

     ScrollTrigger.create({
      trigger: "#highland-orchards",
      start: "top 50%",
      end: "bottom 50%",
      animation: highlandOrchardsTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}


/* =============
    pages - work - cinegraph studios
============= */

var cinegraphStudiosPage = document.querySelector("#cinegraph");

if(cinegraphStudiosPage){
    var cinegraphStudiosTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    cinegraphStudiosTimeline.from("#cinegraph #cinegraph-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#cinegraph #cinegraph-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#cinegraph #cinegraph-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#cinegraph #cinegraph-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#cinegraph #cinegraph-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})

                 .from("#cinegraph #cinegraph-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#cinegraph #cinegraph-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#cinegraph #cinegraph-gallery div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#cinegraph #cinegraph-gallery div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#cinegraph #cinegraph-gallery div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#cinegraph #cinegraph-gallery div ul li:nth-child(11)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#cinegraph #cinegraph-video", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#cinegraph #cinegraph-applications div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-applications div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-applications div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-applications div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-applications div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-applications div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-applications div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-applications div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-applications div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-applications div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#cinegraph #cinegraph-process div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-process div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-process div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#cinegraph #cinegraph-process div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#cinegraph #cinegraph-credits div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")

                 

     ScrollTrigger.create({
      trigger: "#cinegraph-studios",
      start: "top 50%",
      end: "bottom 50%",
      animation: cinegraphStudiosTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}


/* =============
    pages - work - artspaceh
============= */

var artspacehPage = document.querySelector("#artspaceh");

if(artspacehPage){
    var artspacehTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    artspacehTimeline.from("#artspaceh #artspaceh-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#artspaceh #artspaceh-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#artspaceh #artspaceh-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#artspaceh #artspaceh-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#artspaceh #artspaceh-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})

                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(11)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(12)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-gallery div ul li:nth-child(13)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#artspaceh #artspaceh-video", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#artspaceh #artspaceh-applications div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-applications div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-applications div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-applications div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-applications div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-applications div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-applications div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-applications div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#artspaceh #artspaceh-process div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-process div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#artspaceh #artspaceh-process div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#artspaceh #artspaceh-credits div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")

                 

     ScrollTrigger.create({
      trigger: "#artspaceh",
      start: "top 50%",
      end: "bottom 50%",
      animation: artspacehTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}




/* =============
    pages - work - deeply fruit
============= */

var deeplyFruitPage = document.querySelector("#deeply-fruit");

if(deeplyFruitPage){
    var deeplyFruitTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    deeplyFruitTimeline.from("#deeply-fruit #deeply-fruit-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#deeply-fruit #deeply-fruit-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#deeply-fruit #deeply-fruit-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#deeply-fruit #deeply-fruit-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#deeply-fruit #deeply-fruit-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})

                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(11)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(12)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(13)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(14)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(15)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(16)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-exterior div ul li:nth-child(17)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#deeply-fruit #deeply-fruit-interior div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#deeply-fruit #deeply-fruit-interior-cartons div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior-cartons div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior-cartons div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior-cartons div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior-cartons div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior-cartons div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior-cartons div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior-cartons div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#deeply-fruit #deeply-fruit-interior-cartons div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")

                //  .from("#deeply-fruit #deeply-fruit-process div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#deeply-fruit #deeply-fruit-process div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#deeply-fruit #deeply-fruit-process div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")


                 

     ScrollTrigger.create({
      trigger: "#deeply-fruit",
      start: "top 50%",
      end: "bottom 50%",
      animation: deeplyFruitTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}


/* =============
    pages - work - book covers
============= */

var bookCoversPage = document.querySelector("#book-covers");

if(bookCoversPage){
    var bookCoversTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    bookCoversTimeline.from("#book-covers #book-covers-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#book-covers #book-covers-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#book-covers #book-covers-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#book-covers #book-covers-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#book-covers #book-covers-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})

                 .from("#book-covers #orlando div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(11)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(12)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(13)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #orlando div ul li:nth-child(14)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#book-covers #white-teeth div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #white-teeth div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #white-teeth div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #white-teeth div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #white-teeth div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #white-teeth div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #white-teeth div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#book-covers #book-total div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #book-total div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #book-total div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #book-total div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #book-total div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #book-total div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#book-covers #book-total div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")

                //  .from("#book-covers #book-covers-process div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#book-covers #book-covers-process div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#book-covers #book-covers-process div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")


                 

     ScrollTrigger.create({
      trigger: "#book-covers",
      start: "top 50%",
      end: "bottom 50%",
      animation: bookCoversTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}



/* =============
    pages - work - morning again
============= */

var morningAgainPage = document.querySelector("#morning-again");

if(morningAgainPage){
    var morningAgainTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    morningAgainTimeline.from("#morning-again #morning-again-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#morning-again #morning-again-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#morning-again #morning-again-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#morning-again #morning-again-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#morning-again #morning-again-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})

                 .from("#morning-again #morning-again-exterior div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(11)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(12)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(13)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-exterior div ul li:nth-child(14)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#morning-again #morning-again-interior div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-interior div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-interior div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-interior div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-interior div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-interior div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-interior div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#morning-again #morning-again-products div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-products div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-products div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-products div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-products div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-products div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-products div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-products div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#morning-again #morning-again-products div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")

                //  .from("#morning-again #morning-again-process div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#morning-again #morning-again-process div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#morning-again #morning-again-process div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")


                 

     ScrollTrigger.create({
      trigger: "#morning-again",
      start: "top 50%",
      end: "bottom 50%",
      animation: morningAgainTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}


/* =============
    pages - work - frank auerbach catalog
============= */

var frankAuerbachPage = document.querySelector("#frank-auerbach");

if(frankAuerbachPage){
    var frankAuerbachTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    frankAuerbachTimeline.from("#frank-auerbach #frank-auerbach-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#frank-auerbach #frank-auerbach-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#frank-auerbach #frank-auerbach-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#frank-auerbach #frank-auerbach-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#frank-auerbach #frank-auerbach-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})

                 .from("#frank-auerbach #frank-auerbach-start div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #frank-auerbach-start div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #frank-auerbach-start div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#frank-auerbach #frank div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #frank div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#frank-auerbach #estella div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #estella div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #estella div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #estella div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #estella div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#frank-auerbach #juliet div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #juliet div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #juliet div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#frank-auerbach #david div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #david div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #david div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#frank-auerbach #julia div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #julia div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#frank-auerbach #julia div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")

                //  .from("#frank-auerbach #frank-auerbach-process div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#frank-auerbach #frank-auerbach-process div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#frank-auerbach #frank-auerbach-process div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")


                 

     ScrollTrigger.create({
      trigger: "#frank-auerbach",
      start: "top 50%",
      end: "bottom 50%",
      animation: frankAuerbachTimeline,
      toggleActions: "restart none none none"
      // scrub: 1
    //   id: ".page",
    //   markers: true
    });

}


/* =============
    pages - work - concert band
============= */

var concertBandPage = document.querySelector("#concert-band");

if(concertBandPage){
    var concertBandTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    concertBandTimeline.from("#concert-band #concert-band-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#concert-band #concert-band-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#concert-band #concert-band-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#concert-band #concert-band-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#concert-band #concert-band-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})

                 .from("#concert-band #concert-band-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#concert-band #concert-band-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#concert-band #concert-band-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#concert-band #concert-band-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#concert-band #concert-band-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#concert-band #concert-band-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#concert-band #concert-band-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#concert-band #concert-band-gallery div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#concert-band #concert-band-gallery div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#concert-band #concert-band-applications div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#concert-band #concert-band-applications div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#concert-band #concert-band-applications div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#concert-band #concert-band-applications div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#concert-band #concert-band-process div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#concert-band #concert-band-process div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#concert-band #concert-band-credits div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")

                 

     ScrollTrigger.create({
      trigger: "#concert-band",
      start: "top 50%",
      end: "bottom 50%",
      animation: concertBandTimeline,
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
    pages - work - miracles
============= */

var miraclesPage = document.querySelector("#miracles");

if(miraclesPage){
    var miraclesTimeline = gsap.timeline();
    const pageIntroTime = 0.6;
    const pageTime = 0.65;

    miraclesTimeline.from("#miracles #miracles-main div h1", {duration:pageIntroTime, alpha:0}, "+=0.3")
                 .from("#miracles #miracles-main div h3", {duration:pageIntroTime, alpha:0},"-=0.08")
                 .from("#miracles #miracles-main div ul li:nth-child(1)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#miracles #miracles-main div ul li:nth-child(2)", {duration:pageIntroTime, alpha:0, x:-30})
                 .from("#miracles #miracles-main div ul li:nth-child(3)", {duration:pageIntroTime, alpha:0, x:-30})
                 
                 .from("#miracles #miracles-video", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#miracles #miracles-main-work div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#miracles #miracles-main-work div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#miracles #miracles-main-work div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#miracles #miracles-main-work div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#miracles #miracles-main-work div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")

                //  .from("#miracles #miracles-gallery-1 div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#miracles #miracles-gallery-1 div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#miracles #miracles-gallery-1 div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#miracles #miracles-gallery-1 div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#miracles #miracles-gallery-2 div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#miracles #miracles-gallery-2 div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#miracles #miracles-gallery-2 div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")

     ScrollTrigger.create({
      trigger: "#miracles",
      start: "top 50%",
      end: "bottom 50%",
      animation: miraclesTimeline,
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

                 .from("#perused #perused-intro div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-intro div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#perused #perused-gallery div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#perused #perused-gallery div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")

                //  .from("#perused #flipsnack-link a", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#perused #p-colour-palette div ul li", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#perused #perused-gallery-process-1 div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery-process-1 div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery-process-1 div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#perused #perused-gallery-process-1 div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#perused #perused-gallery-process-1 div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#perused #perused-gallery-process-1 div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#perused #perused-gallery-process-1 div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 

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
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-gallery div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#woodmere #woodmere-gallery div ul li:nth-child(11)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#woodmere #woodmere-gallery div ul li:nth-child(12)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#woodmere #woodmere-gallery div ul li:nth-child(13)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#woodmere #woodmere-gallery div ul li:nth-child(14)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#woodmere #woodmere-gallery div ul li:nth-child(15)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#woodmere #woodmere-gallery div ul li:nth-child(16)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#woodmere #w-youtube-video", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#woodmere #woodmere-product div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-product div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-product div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-product div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-product div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-product div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
        
                 .from("#woodmere #woodmere-touchpoint div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-touchpoint div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-touchpoint div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-touchpoint div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-touchpoint div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                //  .from("#woodmere #woodmere-touchpoint div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#woodmere #woodmere-applications div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-applications div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-applications div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-applications div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-applications div ul li:nth-child(5)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-applications div ul li:nth-child(6)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-applications div ul li:nth-child(7)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-applications div ul li:nth-child(8)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-applications div ul li:nth-child(9)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-applications div ul li:nth-child(10)", {duration:pageTime, alpha:0},"-=0.01")

                 .from("#woodmere #woodmere-process div ul li:nth-child(1)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-process div ul li:nth-child(2)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-process div ul li:nth-child(3)", {duration:pageTime, alpha:0},"-=0.01")
                 .from("#woodmere #woodmere-process div ul li:nth-child(4)", {duration:pageTime, alpha:0},"-=0.01")


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


  









  





