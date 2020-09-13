let smallCircleColor = "#c7efcf";
let mediumCircleColor = "#ffd000";
let bigCircleColor = "#f9e2f0";
let startingHatCan = true;

let c = document.getElementById("my-canvas");
let ctx = c.getContext("2d");

/*Is used to draw the snowman. 
Variables are used for some colors, 
so that they can be changed for interactivity*/
function drawArt() {

    ctx.clearRect(0, 0, 270, 450);

    //Big circle
    ctx.beginPath();
    ctx.arc(135, 350, 100, 0, Math.PI*2);
    ctx.fillStyle = bigCircleColor;
    ctx.fill();
    ctx.stroke();

    //Medium circle
    ctx.beginPath();
    ctx.arc(135, 185, 65, 0, Math.PI*2);
    ctx.fillStyle = mediumCircleColor;
    ctx.fill();
    ctx.stroke();

    //Small circle
    ctx.beginPath();
    ctx.arc(135, 80, 40, 0, Math.PI*2);
    ctx.fillStyle = smallCircleColor;
    ctx.fill();
    ctx.stroke();

    /*Two possibilities. Will start with squaared hat,
    and if the hat is clicked it will become a triangular hat. */
    if(startingHatCan) {
        ctx.beginPath();
        ctx.moveTo(105,0);
        ctx.lineTo(165,0);
        ctx.lineTo(165,40);
        ctx.lineTo(195,40);
        ctx.lineTo(195,60);
        ctx.lineTo(75,60);
        ctx.lineTo(75,40);
        ctx.lineTo(105,40);
        ctx.lineTo(105,0);
        ctx.fillStyle = "black";
        ctx.fill();
    } else {
        ctx.beginPath();
        ctx.moveTo(75,60);
        ctx.lineTo(75,40);
        ctx.lineTo(105,40);
        ctx.lineTo(135,0);
        ctx.lineTo(165,40);
        ctx.lineTo(195,40);
        ctx.lineTo(195,60);
        ctx.lineTo(75,60);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    //Star
    ctx.beginPath();
    ctx.moveTo(135,150);
    ctx.lineTo(120,190);
    ctx.lineTo(155,165);
    ctx.lineTo(115,165);
    ctx.lineTo(150,190);
    ctx.lineTo(135,150);
    ctx.fillStyle = bigCircleColor;
    ctx.fill();
    ctx.stroke();

    //Right arm
    ctx.beginPath();
    ctx.moveTo(195,160);
    ctx.lineTo(255,110);
    ctx.lineTo(265,120);
    ctx.moveTo(255,110);
    ctx.lineTo(270,105);
    ctx.moveTo(255,110);
    ctx.lineTo(260,95);
    ctx.moveTo(255,110);
    ctx.lineTo(245,100);
    ctx.stroke();

    //Left arm
    ctx.beginPath();
    ctx.moveTo(75,160);
    ctx.lineTo(15,110);
    ctx.lineTo(25,100);
    ctx.moveTo(15,110);
    ctx.lineTo(10,95);
    ctx.moveTo(15,110);
    ctx.lineTo(0,105);
    ctx.moveTo(15,110);
    ctx.lineTo(5,120);
    ctx.stroke();
};
drawArt();


/*
Gives the position to the mouse 
*/
function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: Math.round(event.clientX - rect.left),
        y: Math.round(event.clientY - rect.top)
    };
};

/*
Eventlistener for when you move the mouse over the canvas.
Changes color based on whether or not you are inside specific circles.
-30 if if-statements because of the canvas' padding.
*/
c.addEventListener('mousemove', function(event) {

    let mousePosition = getMousePosition(c, event);
    let x = mousePosition.x;
    let y = mousePosition.y;

    if(Math.sqrt((x-135-30)*(x-135-30) + (y-80-30)*(y-80-30)) <= 40) {
        smallCircleColor = "#a5eaf7";
        mediumCircleColor = "#ffd000";
    } else if(Math.sqrt((x-135-30)*(x-135-30) + (y-185-30)*(y-185-30)) <= 65) {
        mediumCircleColor = "#0c1b33";
        smallCircleColor = "#c7efcf";
    } else {
        smallCircleColor = "#c7efcf";
        mediumCircleColor = "#ffd000";
    };
    drawArt();
});

//Eventlistener for when you click the big circle.
let startingColorCan = true;
c.addEventListener('click', function(event) {

    let mousePosition = getMousePosition(c, event);
    let x = mousePosition.x;
    let y = mousePosition.y;

    if(Math.sqrt((x-135-30)*(x-135-30) + (y-350-30)*(y-350-30)) <= 100) {
        if(startingColorCan) {
            bigCircleColor = "#ff5e00";
            startingColorCan = false;
        } else {
            bigCircleColor = "#f9e2f0";
            startingColorCan = true;
        }
    };
    drawArt();
});

/*Eventlistener for when you click on the hat.
For the logical expressions i have added 30 
because of the padding. */
c.addEventListener('click', function(event) {
    
    let mousePosition = getMousePosition(c, event);
    let x = mousePosition.x;
    let y = mousePosition.y;

    if(startingHatCan && 
        (((x<=195 && x>=135)&&(y<70))||((x<=225 && x>=105)&&(y<=90 && y>=70)))) {
        startingHatCan = false;
        drawArt();
    } else if (!startingHatCan && 
        ((x>=750/4-3/4*y) && (x<=570/4+3/4*y) 
        && (y>=750/3-4/3*x) && (y>=-570/3+4/3*x) && (y<=70)) || 
        ((x<=225 && x>=105)&&(y<=90 && y>=70))) {
        startingHatCan = true;
        drawArt();
    };
});