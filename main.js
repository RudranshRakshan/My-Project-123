s1 = "";
s2 = "";

leftWX = 0;
leftWY = 0;
rightWX = 0;
rightWY = 0;

function preload() {
    s1 = loadSound("music.mp3");
    s2 = loadSound("music2.mp3");

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(600, 500);
    video.hide();

    pose = ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log("Model is loaded");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        leftWX = result[0].pose.leftWrist.x;
        leftWY = result[0].pose.leftWrist.y;
        rightWX = result[0].pose.rightWrist.x;
        rightWY = result[0].pose.rightWrist.y;
    }
}