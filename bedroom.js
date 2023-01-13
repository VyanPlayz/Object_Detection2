function Back(){
    window.location="index.html";
}

function preload(){
    img = loadImage("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-wall-decor-ideas-1627317588.jpeg?crop=1.00xw:0.751xh;0.00160xw,0.230xh&resize=640:*");
}

function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img , 0 , 0 ,  640 , 420);
    if(status != ""){
        
    }
}

function modelLoaded(){
    console.log("Model Loaded Successfully!!!");
    status = "true";
    objectDetector.detect(img , gotResult);
}

function gotResult(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}