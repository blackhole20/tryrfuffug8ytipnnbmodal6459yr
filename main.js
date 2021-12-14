var song="";

var leftwrist_x=0;
var leftwrist_y=0;

var rightwrist_x=0;
var rightwrist_y=0;

function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas= createCanvas(600,500);
canvas.center();

video= createCapture(VIDEO);
video.hide();

posenet=ml5.poseNet(video,modalloaded);
posenet.on("pose",gotposes);
}

function draw(){
image(video,0,0,600,500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modalloaded() {
    console.log("modal loaded");
}

function gotposes(results){
if (results.length>0) {
    console.log(results);
    leftwrist_x= results[0].pose.leftWrist.x;
    leftwrist_y= results[0].pose.leftwrist.y;
    console.log("left wrist x = "+leftwrist_x);
    console.log("left wrist y = "+leftwrist_y);

    rightwrist_x= results[0].pose.rightWrist.x;
    rightwrist_y= results[0].pose.rightWrist.y;
    console.log("right wrist x = "+rightwrist_x);
    console.log("right wrist y = "+rightwrist_y);
}
}