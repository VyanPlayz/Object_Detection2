function Back(){
    window.location="index.html";
}

function preload(){
    img = loadImage("https://media.istockphoto.com/id/1303404648/photo/mockup-a-tv-wall-mounted-in-a-living-room-room-with-a-white-wall.jpg?b=1&s=170667a&w=0&k=20&c=zLBDkddlnNZBfvYuBowL_IKIb5MC8PphvtwMFrp_IkU=");
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