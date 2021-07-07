var canvas , bgImg ;
var gameState = 0 ;
var playerCount ;
var database ;
var player , game , form ; 

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.gameState();
  game.start();

}

function draw(){
  
}