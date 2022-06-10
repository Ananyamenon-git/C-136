video = "";
status = "";

function preload(){

  video = createVideo('video.mp4');
  video.hide();
  
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}

function start(){
 objectDetector = ml5.objectDetector('cocossd',modelLoaded);
 document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model is loaded");
    status = true;
    video.loop();
    video.volume(1);
    video.speed(1);
}

function draw(){
    image(video,0,0,480,380);
}

