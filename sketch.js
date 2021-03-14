var canvas, backgroundImage;
var allPlayers;

 var gameState = 0;
var playerCount = 0;

var database;

var form, player, game;
var car1,car2,car3,car4;
var cars=[]

 function preload(){
   player1=loadImage("images/car1.png")
   player2=loadImage("images/car2.png")
   player3=loadImage("images/car3.png")
   player4=loadImage("images/car4.png")
   track=loadImage("images/track.jpg")
   
 }

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if (playerCount===4){
    game.update(1);
  }
  if (gameState===1){
    game.play()
  }
  if (gameState===2){
    game.end()
  }
}
