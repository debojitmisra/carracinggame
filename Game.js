class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,200)
    car4=createSprite(700,200)
    cars=[car1,car2,car3,car4]

    //adding images
    car1.addImage(player1)
    car2.addImage(player2)
    car3.addImage(player3)
    car4.addImage(player4)

    //numbering>>0,1,2,3
    //index>>1,2,3,4
    //cars[index-1].x

    //cars[0].x
  }

  play(){
    background("green")
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.getCarsAtEnd();
      // console.log(allPlayers)

    //{player1:{name:rvfr,distance:fvfsd},player2:{name,distance}}
    //allPlayers['player1'].distance

    if(allPlayers !== undefined){
      var index=0;
      var x=210;
      var y;
      for(var plr in allPlayers){
        index++;
        x+=310;
        y=displayHeight-allPlayers[plr].distance
        
        cars[index-1].x=x
        cars[index-1].y=y



       if (index===player.index){
         textAlign(CENTER)
         fill("red")
         text(player.name, cars[index-1].x,cars[index-1].y+65)
         camera.position.x=displayWidth/2;
         camera.position.y=cars[index-1].y;
       }



        // if (plr === "player" + player.index)
        //   fill("red")
        // else
        //   fill("black");

        // display_position+=20;
        // textSize(40);
        // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if (player.distance>5500){
      console.log('game should be ended here')
      player.rank++
      Player.updateCarsAtEnd(player.rank)
      gameState=2
    }
    drawSprites();
  }
  end(){
   console.log('gameOver');
   console.log(player.rank)
  }
  
}




