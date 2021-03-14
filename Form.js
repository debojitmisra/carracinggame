class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton("reset")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50, 0);

    this.input.position(displayWidth/2-40, displayHeight/2-18);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth/2+300, 0)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      
    
      player.name = this.input.value();
      console.log(playerCount);
      playerCount+=1;
      player.index = playerCount;
      player.update();
      console.log(playerCount);
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-17, displayHeight/2-15);
    });

    this.reset.mousePressed(()=>{
      game.update(0)
      player.updateCount(0)
      Player.updateCarsAtEnd(0)
      
      for(var i=1;i<=4;i++){
        var playerIndex = "players/player" +i;
        database.ref(playerIndex).update({
          name:"",
          distance:0
        });
      }
      
    })

  }
}