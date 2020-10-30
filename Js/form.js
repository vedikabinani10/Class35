class Form{
    constructor(){
        this.title = createElement('h1');
        this.title.html("Multiplayer");
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3')
    }
    display(){
        this.title.position(470,20);
        this.input.position(470,250);
        this.button.position(470,300);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            PlayerCount = PlayerCount+1;
            this.greeting.html("Hello! "+name);
            this.greeting.position(470,250);
        })
    }
}