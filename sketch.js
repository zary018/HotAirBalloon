var balloon, position;
var database
function preload(){
  BackgroundImage = loadImage("BackgroundImage.jpeg");
  HotAirBalloonImage = loadImage("HotAirBalloon.png");
}
function setup() {
  database = firebase.database();
  createCanvas(800,600);



  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(HotAirBalloonImage);
  balloon.scale = 0.5;

  var balloonHeight = database.ref('balloon/height');
  balloonHeight.on("value", readHeight);
}

function draw() {
  background(BackgroundImage);  

  if(keyIsDown(UP_ARROW)){
    updateHeight(0,-10);
  }

  if(keyDown(DOWN_ARROW)){
  updateHeight(0,10);
  }

  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0)
  }

  if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0)
  }
  drawSprites();
}

function readHeight(data) {
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
  
}

function updateHeight(height){
  database.ref('balloon/height').set({
    x: height.x + x,
    y: height.y + y
  })
}


//update(name){
  //var playerIndex = "player" + playerCount//player1
  //database.ref(playerIndex).set( {name:name}  )

//}