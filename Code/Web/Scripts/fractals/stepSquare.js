function stepSquareDraw(smallestAxis, itterations, stepSize) {
    if(stepSize < smallestAxis / itterations || stepSize == null) {
        stepSize = 2;
    }
    
    var squareSize = smallestAxis,
        itterationStepSize = stepSize,
        padding = 0;

    for(var i = 0; i < itterations; i++) {
        frame.beginPath();
            if(i % 2 == 0){
                frame.fillStyle = "rgb(255,0,0)";
            } else {
                frame.fillStyle = "rgb(0,0,255)";
            }
            frame.rect(padding,padding,squareSize,squareSize);
            frame.fill();
        frame.closePath();
        padding+= (0.5 * itterationStepSize);
        squareSize-= itterationStepSize;
    }
}