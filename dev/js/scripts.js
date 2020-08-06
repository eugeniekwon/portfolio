
// @codekit-prepend "home-scroll.js";
// @codekit-prepend "scrollTrigger/scrollTriggerReg.js";
// @codekit-prepend "scrollTrigger/work.js";

// @codekit-prepend "main-nav/burger-animation.js";
// @codekit-prepend "main-nav/burger-mouse-events.js";
// @codekit-prepend "main-nav/click.js";
// @codekit-prepend "main-nav/nav-global.js";


// @codekit-prepend "fancybox.js";


var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;

function mouseClick() {
    console.log("click");
    if ($(window).width() <= 992) {
        console.log("click");
        if (isVisible === false) {
            $nav.show();
            isVisible = true;
        } else {
            $nav.hide();
            isVisible = false;
        }
    }
}

$burger.on("click", mouseClick);
// close the mobile menu when menu link is clicked
$navA.on("click", mouseClick);

