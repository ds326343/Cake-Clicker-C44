var cake 
var money
var moneyPerClick 
var cost 
var costScaleFactor
var distanceToCake

money = 0;
moneyPerClick = 1
function preload(){
cakeImage = loadImage("cakeimage.png");


}



function setup() {
  createCanvas(windowWidth,windowHeight);
  cake = createSprite(windowWidth/2,windowHeight/2,50,50);
  cake.addImage(cakeImage);
  console.log(cake.height);
  shop = new Shop();
}
function draw() {
  background(0);  
  textSize(40)
  fill("orange");
  text("Money: "+money,windowWidth/2-90,125);
  //distanceToCake();
  shop.display();






  
  drawSprites();
}

function distanceToCake(){
  distance = cake.x - mouseX;
  distancey = cake.y - mouseY;
  //console.log(distancey);
  //console.log(distance);

}
//-90 to 90 X pos
//-107 to 104 Y pos
function mouseClicked(){
  var dx = windowWidth/2 - (windowWidth/2 - 102)
  console.log(dx);
  if(mouseX>windowWidth/2 - 102 && mouseX<windowWidth/2 + 102 && mouseY>windowHeight/2 - 124 && mouseY<windowHeight/2 + 124){
  money = money + moneyPerClick;
  cake.scale = cake.scale + 0.05;
  setTimeout(originalSize,50)
  }
  return money;
}

function originalSize(){
  cake.scale = cake.scale - 0.05
}

