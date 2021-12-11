img="";
status="";
objects=[];
sound="";
function preload(){
    img=loadImage('dog_cat.jpg');
    sound=soundFile('9.mp3');
    }
function setup(){
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
object_detector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
console.log("your model is initialised");
status=true;
}
function gotResults(error,results){
if(error){
console.log(error);
}
console.log(results);
objects=results;
}
function draw(){
image(video,0,0,380,380);
if(status!=""){
   
object_detector.detect(video,gotResults);
for(i=0; i<objects.length; i++){
if(objects[i].label=="person"){
document.getElementById("status").innerHTML="baby detected";
}
else{
    document.getElementById("status").innerHTML="baby not detected";
sound.playing();
}


}
if(objects.length<0){
document.getElementById("status").innerHTML="baby not detected";
sound.playing();
}

}
}

