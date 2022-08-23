nX=0;
nY=0;
rWx=0;
lWx=0;
diff=0;

function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(90,100)
    canvas = createCanvas(800, 550)
    canvas.position(700, 150);
    pose = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log("model is loaded");
    pose.on('pose', gotResult)
}

function gotResult(result) {
    if (result.length > 0) {
        console.log(result);
        nX=result[0].pose.nose.x;
        nY=result[0].pose.nose.y;
        rWx=result[0].pose.rightWrist.x;
        lWx=result[0].pose.leftWrist.x;
        diff=floor(lWx-rWx);

    }
}

function draw() {
    background("lightgreen");
    document.getElementById("sqSize").innerHTML="The size of text is: "+diff;
    fill("blue");
    textSize(diff);
    text("Rudransh",nX,nY);
}
