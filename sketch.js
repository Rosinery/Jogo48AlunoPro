var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var score = 0;
var life = 3;
var bullets = 70;

var heart1, heart2, heart3

var gameState = "fight"

var lose, winning, explosionSound;
var bulletGroup, zombieGroup;


function preload(){
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  
  

  //criando o sprite do jogador



  //criando sprites para representar vidas restantes

   

  //criando grupos de zumbis e balas
    



}

function draw() {
  background(0); 


if(gameState === "fight"){

  //exibindo a imagem apropriada de acordo com as vidas restantes
  

  //vá para gameState "lost" quando 0 vidas estiverem restantes


  //vá para gameState "won" se a pontuação for 100
  

  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques




//solte balas e mude a imagem do atirador para a posição de tiro quando o espaço for pressionado
if(keyWentDown("space")){
  bullet = createSprite(displayWidth-1150,player.y-30,20,10)
  bullet.velocityX = 20
  
  bulletGroup.add(bullet)
  player.depth = bullet.depth
  player.depth = player.depth+2
  player.addImage(shooter_shooting)
  bullets = bullets-1
  explosionSound.play();
}

//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

//vá para gameState "bullet" quando o jogador ficar sem balas


//destrua o zumbi quando a bala o tocar e aumente a pontuação
if(zombieGroup.isTouching(bulletGroup)){
  for(var i=0;i<zombieGroup.length;i++){     
      
   if(zombieGroup[i].isTouching(bulletGroup)){
        zombieGroup[i].destroy()
        bulletGroup.destroyEach()
        explosionSound.play();
 
        score = score+2
        } 
  
  }
}

//reduza a vida e destrua o zumbi quando o jogador o tocar
if(zombieGroup.isTouching(player)){
 
   lose.play();
 

 for(var i=0;i<zombieGroup.length;i++){     
      
  if(zombieGroup[i].isTouching(player)){
       zombieGroup[i].destroy()
      
      life=life-1
       } 
 
 }
}

//chame a função para gerar zumbis
enemy();
}




drawSprites();

//exibindo a pontuação e as vidas e balas restantes
  textSize(20)
  fill("white")
  text("Balas = " + bullets,displayWidth-210,displayHeight/2-250)
  text("Pontuação = " + score,displayWidth-200,displayHeight/2-220)
  text("Vidas = " + life,displayWidth-200,displayHeight/2-280)

//destrua o zumbi e o jogador e exiba uma mensagem em gameState "lost"
if(gameState == "lost"){
  
  

}

//destrua o zumbi e o jogador e exiba uma mensagem em gameState "won"
else if(gameState == "won"){
 
  

}

//destrua o zumbi, o jogador e as balas e exiba uma mensagem no gameState "bullet"
else if(gameState == "bullet"){
 
  

}

}


//criando função para gerar zumbis
function enemy(){
  

}
