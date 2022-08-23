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
    }
}

function draw() {
    
}
