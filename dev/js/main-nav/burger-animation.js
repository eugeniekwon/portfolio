import { gsap } from "gsap";

var burgerSpeed = 0.15;

gsap.set(".lines", {transformOrigin:"center"});

export var burgerTimeline = gsap.timeline({paused:true})


burgerTimeline.addLabel("burgertoX")
      .to("#top-line", {duration:burgerSpeed, rotation:-45, y:10, stroke: "#fff"}, "burgerToX")
      // .to("#middle-line", {duration:burgerSpeed, alpha:0}, "burgerToX")
      .to("#bottom-line", {duration:burgerSpeed, rotation:45, y:-10, stroke: "#fff"}, "burgerToX")
      .to("#logo", {duration:burgerSpeed, color:"#fff"}, "burgerToX");
      // .to("#logo", {duration:burgerSpeed, color:"#fff", onReverseComplete:resetBurgerColour}, "burgerToX");


// function resetBurgerColour (){
//   gsap.set("#top-line", {stroke: "#4C5559"})
//   gsap.set("#bottom-line", {stroke: "#4C5559"})
// }

// burgerTimeline.addLabel("burgertoX")
//               .to("#top-line", {duration:burgerSpeed, rotation:-45, y:10}, "burgerToX")
//               .to("#middle-line", {duration:burgerSpeed, alpha:0}, "burgerToX")
//               .to("#bottom-line", {duration:burgerSpeed, rotation:45, y:-10}, "burgerToX")
            //   .addPause()
            //   .addLabel("XtoBurger")
            //   .addPause()
            //   .to("#burger", {duration:burgerSpeed, rotation:0}, "burgerToX")
            //   .to("#top-line", {duration:burgerSpeed, rotation:0}, "XtoBurger")
            //   .to("#middle-line", {duration:burgerSpeed, alpha:1}, "XtoBurger")
            //   .to("#bottom-line", {duration:burgerSpeed, rotation:0}, "XtoBurger")
            //   .addPause()

// function resetBurgerColour(){
//   gsap.set(".lines", {duration:0.15, stroke:"#89a6ad"});
// }