status = "";

function setup(){
    canvas = createCanvas(480, 280);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 280);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML = "Status : Object is Detecting";
    object = document.getElementById("Object_Name").value;
}

function modelLoaded(){
    console.log("Cocossd Model is Loaded");
    status = true;
}

function draw(){
    image(video, 0, 0, 480, 280);
}