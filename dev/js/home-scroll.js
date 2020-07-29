
gsap.registerPlugin(ScrollToPlugin);

var scrollItems = ["#work-2"];

function scrollIndex(){

    //scroll from #work-1 to #work-2
    gsap.to(window, {duration: 0.75, scrollTo:{ y: scrollItems[$("#scroll-button").index(this)], offsetY:70 }});
    // gsap.to(window,{duration: 2, scrollTo:{y:"#work-2", offset:-80}});


    // gsap.to(window, {duration: 1, scrollTo: {y: "#work-2", offsetY: 50}});
    // gsap.to(window, {duration: 2, scrollTo:"#work-2"});


}


$("#scroll-button button").on("click", scrollIndex);


