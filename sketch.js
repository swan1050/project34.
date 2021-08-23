//Create variables here
var dog,dogImg,dogImg1,database,foodS,foodStock;
function preload()
{
	//load images here
  dogImg=loadImage("images/dog.png")
  dogImg1=loadImage("images/dog1.png")
}

function setup() {
	createCanvas(500, 500);

  database=firebase.database();

  dog=createSprite(250,300,150,150)
  dog.addImage(dogImg)
  dog.scale=1

  textSize(20)
  foodStock=database.ref('food');
  foodStock.on ("value",readStock);
}


function draw() {  

  drawSprites();
  
background(46,139,87)




if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);
}

fill(255,255,254)
stroke("black")
text("food Remaining: " +foodS,170,200)
textSize(13)
text("press up arrow key to feed drago milk ",130,10,300,20)
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0
}
else{
  x=x-1
}
  database.ref("/").update({
  food:x
  })
}


