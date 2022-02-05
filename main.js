video = "";
Status = "";
object = [];
input = "";
function draw(){
    push();
    translate(width,0);
    scale(-1, 1);
  image(video, 0,0, 500, 400);
  pop();
}
function setup(){
    canvas = createCanvas(460,380);
    canvas.center();
    video = createCapture(460,380);
    video.hide();
    
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        object = results;
    }
}
function modelloaded(){
    console.log("Model Loaded!");
    Status = true;  
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("input").value;
    console.log(input); 
}