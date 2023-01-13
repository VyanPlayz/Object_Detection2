function Back(){
    window.location="index.html";
}

function preload(){
    img = loadImage("https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwb24lMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80");
}

function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img , 0 , 0 , 640 , 420);
    if(status != ""){
        
    }
}

function modelLoaded(){
    console.log("Model is loaded Successfully!!!");
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