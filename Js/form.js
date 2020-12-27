class Form{
    constructor(){
        this.title = createElement('h1');
        this.title.html("Multiplayer");
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3')
    }
    display(){
        this.title.position(displayWidth/2.56,displayHeight/36);
        this.input.position(displayWidth/2.56,displayHeight/2.88);
        this.button.position(displayWidth/2.56,displayHeight/2.4);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            PlayerCount = PlayerCount+1;
            player.index = PlayerCount;
            player.update();
            player.updatecount(PlayerCount);
            this.greeting.html("Hello! "+ player.name);
            this.greeting.position(displayWidth/2.56,displayHeight/2.88);
        })
    }
}