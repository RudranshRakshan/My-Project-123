s1 = "";
s2 = "";
song = '';
leftWX = 0;
leftWY = 0;
rightWX = 0;
rightWY = 0;

leftWristS = 0;
rightWristS = 0;
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
    s1.rate(0.5)
    image(video, 0, 0, 600, 500);
    fill("grey");
    stroke("grey");

    if (leftWristS > 0.02) {
        circle(leftWX, leftWY, 10);

        if (s2.isPlaying()) {
            s2.stop();

        }
        s1.play();
        document.getElementById("sName").innerHTML="Song Name: Peter Pan Song";
    }

    if (rightWristS > 0.02) {
        circle(rightWX, rightWY, 10);
        if (s1.isPlaying()) {
            s1.stop();
        }

        s2.play();
        document.getElementById("sName").innerHTML="Song Name: Harry Potter Theme Song";

    }
}

function modelLoaded() {
    console.log("Model is loaded");
}

function gotPoses(result) {
    if (result.length > 0) {
        leftWristS = result[0].pose.keypoints[9].score;
        rightWristS = result[0].pose.keypoints[10].score;
        console.log(result);
        leftWX = result[0].pose.leftWrist.x;
        leftWY = result[0].pose.leftWrist.y;
        rightWX = result[0].pose.rightWrist.x;
        rightWY = result[0].pose.rightWrist.y;

    }
}


