class Game{
    constructor(){

    }
    GetState(){
        var GameStateref = database.ref('GameState');
        GameStateref.on("value",function(data){
            GameState = data.val();
        })
    }
    Update(State){
        database.ref('/').update({
            GameState : State
        });
    }
    Start(){
        if(GameState==0){
            form = new Form();
            form.display();
        }
    }
}