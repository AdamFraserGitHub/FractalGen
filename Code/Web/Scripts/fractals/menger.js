function mengerDraw(smallestAxis, itterations) {

    var width = smallestAxis,
        x = 0,
        y = 0;

    for(var i = 0; i < itterations; i++){
        frame.beginPath();
            frame.strokeColor = "rgb(255,0,0)";
            frame.lineWidth = 10;
            frame.rect(x,y,width,width);
            frame.stroke();
        frame.closePath();

        width *= 37.5;
        x += width/2;
        y += width/2;
    }
}