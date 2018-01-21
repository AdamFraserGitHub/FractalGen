function internalisedCircleDraw(smallestAxis, itterations) {

    var devider = 2,
        drawX;

    for(var i = 0; i < itterations; i++){
        frame.beginPath();
            if(i % 2 == 0){
            frame.fillStyle = "rgb(0,0,0)";
            } else {
                frame.fillStyle = "rgb(255,255,255)";
            }
            drawX = smallestAxis / devider;
            for(var j = -1; j < devider*i; j++){
                frame.arc(drawX, smallestAxis / 2, smallestAxis / devider, 0, Math.PI * 2, false);
                drawX += 1/devider * smallestAxis * 2;
            }
            frame.fill();
        frame.closePath();

        devider*=2;
    }
}