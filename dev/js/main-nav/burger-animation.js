import { gsap } from "gsap";

var burgerSpeed = 0.15;

gsap.set(".lines", {transformOrigin:"center"});

var burgerTimeline = gsap.timeline({paused:true})

if(burgerTimeline){
  burgerTimeline.addLabel("burgertoX")
      .to("#top-line", {duration:burgerSpeed, rotation:-45, y:10}, "burgerToX")
      .to("#middle-line", {duration:burgerSpeed, alpha:0}, "burgerToX")
      .to("#bottom-line", {duration:burgerSpeed, rotation:45, y:-10}, "burgerToX")
}

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