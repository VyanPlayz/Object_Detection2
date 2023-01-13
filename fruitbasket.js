function Back(){
    window.location="index.html";
}

function preload(){
    img = loadImage("https://www.bigbasket.com/media/uploads/p/l/40005762_8-fresho-fruit-basket-medium.jpg");
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