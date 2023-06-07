var  bala;
var balaSprite;
var balaSpriteVol;
var espada;
var fondo;
var iron1;
var iron2;
var iron3;
var spider1;
var spider2;
var spider3;
var pistola;
var pistola1;
var player1;
var player2;
var rand1, rand2;
var gameState;


function preload(){
  bala = loadImage("bala.gif");
  fondo = loadImage("fondo.gif");
  iron1=loadImage("ironman1.gif");
  iron2=loadImage("ironman2.gif");
  iron3=loadImage("ironman3.gif");
  spider1=loadImage("spider1.gif");
  spider2=loadImage("spider2.gif");
  spider3=loadImage("spider3.gif");
  espada=loadImage("espada-removebg-preview - copia.png");
  espadaVol=loadImage("espada-removebg-preview.png");
  pistola=loadImage("pistola1-removebg-preview.png");
  pistolaVol=loadImage("5-removebg-preview.png")
  basuka=loadImage("pistola-removebg-preview.png");
  basukaVol=loadImage("Presentación1-removebg-preview.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  
  

}

function draw() {
  background("purple");
  image(fondo,0,0,width,height);
  armas();

  print(rand1)
  print(rand2)
  if ((rand1 == 1 || rand1 == 3) && keyDown("e")){
    balaSprite.visible =true;
    balaSprite.velocityX = 2;
  }

  if ((rand2 == 4 || rand2 == 6) && keyDown("r")){
    balaSpriteVol.visible =true;
    balaSpriteVol.velocityX = -2;
  }
  

  drawSprites();
}

var armaPlayer1Assigned = false;
var armaPlayer2Assigned = false;

function armas() {
  if (!armaPlayer1Assigned) {
    var armaPlayer1 = createSprite(400, 610, 75, 75);
    armaPlayer1.scale = 0.3;
    rand1 = Math.round(random(1, 3));
    
    switch (rand1) {
      case 1:
        armaPlayer1.addImage(pistola);
        break;
      case 2:
        armaPlayer1.addImage(espada);
        break;
      case 3:
        armaPlayer1.addImage(basuka);
        break;
    }
    armaPlayer1Assigned = true;
   
    balaSprite = createSprite(530, 610, 75, 75);
    balaSprite.addImage(bala);
    balaSprite.scale = 0.1;
    balaSprite.visible = false;

  }

  if (!armaPlayer2Assigned) {
    var armaPlayer2 = createSprite(1200, 550, 25, 25);
    armaPlayer2.scale = 0.3;
    rand2 = Math.round(random(4, 6));
    switch (rand2) {
      case 4:
        armaPlayer2.addImage(pistolaVol);
        
        break;
      case 5:
        armaPlayer2.addImage(espadaVol);
        
        break;
      case 6:
        armaPlayer2.addImage(basukaVol);
        basukaVol.scale=0.5;
        break;
    }
    armaPlayer2Assigned = true;

    balaSpriteVol = createSprite(1120, 550, 25, 25);
  balaSpriteVol.addImage(bala);
  balaSpriteVol.scale = 0.1;
  balaSpriteVol.visible = false;
  
  }
}

