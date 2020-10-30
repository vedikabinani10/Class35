var database;
var form, game, player;
var GameState=0, PlayerCount=0;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.Start();
}

function draw(){
    background("white");
}