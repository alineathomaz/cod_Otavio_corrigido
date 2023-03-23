var player, playerImg, playerFight, playerPunch;
var Enemies;
var escritorio;
var chaoImg, chao;
var paredeImg, parede;
var gameState = "fight"

function preload()
{
  chaoImg = loadImage("sprites/pixilframe26.png")
  paredeImg = loadImage("sprites/pixilframe9.png")
  playerImg = loadImage("sprites/pixilframe24.png")
}

function setup() 
{  
  createCanvas(windowWidth, windowHeight);

  //adicionando a imagem de fundo
  chao = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20);
  chao.addImage("chao", chaoImg);
  chao.scale = 1.28;

  parede = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  parede.addImage("parede", paredeImg);
  parede.scale= 1.28;

  //criando o sprite do jogador
  player = createSprite(displayWidth-1150,displayHeight-300,50,50);
  player.addImage("player", playerImg);
  player.scale=0.4;
  //player.debug=true;
  player.setCollider("rectangle",0,0,300,300)

}

function draw() 
{
  background(0); 
  
  if (gameState === "fight") 
  {
    if(keyDown("UP_ARROW") || touches.length > 0)
    {
      player.y = player.y-30
    }

    if(keyDown("DOWN_ARROW") || touches.length > 0)
    {
     player.y = player.y+30
    }
  } 
 
  drawSprites();
}
