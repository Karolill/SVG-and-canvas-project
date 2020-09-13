/*
These functions will change the color of the circles.
Because the html-elements can be easily retreived
for each circle (and the star), I chose to use jQuery.
*/

$(document).ready(function() {
    $("#small-circle").hover(function() {
        $("#small-circle").css("fill", "#a5eaf7");
    },
    function() {
        $("#small-circle").css("fill", "#c7efcf");
    });
});

$(document).ready(function() {
    $("#medium-circle, #star").hover(function() {
        $("#medium-circle").css("fill", "#0c1b33");
    },
    function() {
        $("#medium-circle").css("fill", "#ffd000");
    });
});

let startingColorSvg = true;
$(document).ready(function() {
    $("#big-circle").click(function() {
        if(startingColorSvg) {
            $("#big-circle, #star").css("fill", "#ff5e00");
            startingColorSvg = false;
        } else {
            $("#big-circle, #star").css("fill", "#f9e2f0");
            startingColorSvg = true;
        };
    });
});

let startingHatSvg = true;
$(document).ready(function() {
    $(".hat").click(function() {
        if(startingHatSvg) {
            $("#squared-hat").css("display", "none");
            $("#triangle-hat").css("display", "inline");
            startingHatSvg = false;
        } else {
            $("#squared-hat").css("display", "inline");
            $("#triangle-hat").css("display", "none");
            startingHatSvg = true;
        };
    });
});