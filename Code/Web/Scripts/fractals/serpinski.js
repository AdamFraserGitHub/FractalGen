function serpinskiDraw(xWidth, yHeight, itterations) {

    //first triangle
    var tipXOG = xWidth/2, tipYOG = 0, baseYOG = 1.5 * tipX;
    drawEqulatiralTri(tipX,tipY,baseY);

    var tipY, tipX, baseY;
    tipY = baseYOG;
    baseY = tipYOG + 1/2 * baseYOG;
    drawEqulatiralTri(tipX,tipY,baseY);
    tipYTemp = tipY;
    tipY -= (tipY - baseY);
    baseY -= 1/2 * (tipYTemp - baseY);
    drawEqulatiralTri(tipX, tipY, baseY);
    tipYTemp = tipY;
    tipY += 2 * (tipY - baseY);
    baseY += 2 * (tipYTemp - baseY);
    tipX += 250;
    drawEqulatiralTri(tipX, tipY, baseY);
    tipX -= 500;
    drawEqulatiralTri(tipX, tipY, baseY);
}

function drawEqulatiralTri(tipX, tipY, baseY) {
    var sideLen = 4/3 * Math.abs(tipY-baseY),
        deltaXFromSymToBasePoint = sideLen/2,
        xBasePoint1X = tipX - deltaXFromSymToBasePoint,
        xBasePoint2X = tipX + deltaXFromSymToBasePoint;
        console.log(deltaXFromSymToBasePoint);
    frame.beginPath();
        frame.strokeStyle = "rgb(0,0,0)";
        frame.lineWidth = 2;
        frame.moveTo(tipX,tipY);
        frame.lineTo(xBasePoint1X,baseY);
        frame.lineTo(xBasePoint2X, baseY);
        frame.lineTo(tipX,tipY);
        frame.stroke();
    frame.closePath();
}