////////////////////////////////////////////////////////
//
// access this function using updateInventory.call(this)
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
function updateInventory() {
    // console.log("*** updateInventory()")
    // Emit events showInventory
    this.inventory = {}
    this.inventory.hamper = window.hamper
    this.inventory.cookie = window.cookie
    this.inventory.table = window.table
    this.inventory.angpao = window.angpao
   
     // console.log('*** updateInventory() Emit event', this.inventory)
     this.invEvent = (event, data) => {
        this.scene.get('showInventory').events.emit(event, data);
    }
    this.invEvent("inventory", this.inventory);
  }
  
  ////////////////////////////////////////////////////////
  //
  // access this function with globalHitEnemy
  // Uses a JS function to prevent repeated codes
  // 
  ///////////////////////////////////////////////////////
  function globalHitEnemy1(player,enemy) {
      console.log("*** player overlap enemy");
     
      // Shake screen
     this.cameras.main.shake(75);
     
    this.HitSnd = this.sound.add("hit").setVolume(0.9);
    // play the sound
    this.HitSnd.play()
  
		  // deduct heart
      window.cookie--;

      //when hit enemy
      enemy.disableBody(true, true);
      
      // Call globalFunctions.js updateInventory
      updateInventory.call(this)
 
    if (window.cookie == 0){
	    console.log("*** player gameover");
      this.scene.start("gameover", { "lvl":1});
      //this.loselifeSnd.play();
    }
  }

  function globalHitEnemy2(player,enemy) {
    console.log("*** player overlap enemy");
   
    // Shake screen
   this.cameras.main.shake(75);

   this.HitSnd = this.sound.add("break").setVolume(0.75);
   // play the sound
   this.HitSnd.play()

    // deduct heart
    window.cookie--;

    //when hit enemy
    enemy.disableBody(true, true);
    
    // Call globalFunctions.js updateInventory
    updateInventory.call(this)

  if (window.cookie == 0){
    console.log("*** player gameOver");
    this.scene.start("gameover", { lvl:2});
    //this.loselifeSnd.play();
  }
}

function globalHitEnemy3(player,enemy) {
  console.log("*** player overlap enemy");
 
  // Shake screen
 this.cameras.main.shake(75);
 
 this.HitSnd = this.sound.add("hit").setVolume(0.9);
 // play the sound
 this.HitSnd.play()

  // deduct heart
  window.cookie--;

  //when hit enemy
  enemy.disableBody(true, true);
  
  // Call globalFunctions.js updateInventory
  updateInventory.call(this)

if (window.cookie == 0){
  console.log("*** player gameOver");
  this.scene.start("gameover", { lvl:3});
  //this.loselifeSnd.play();
}
}
  

  ////////////////////////////////////////////////////////
  //lvl1
  // access this function with globalCollectHamper
  // Uses a JS function to prevent repeated codes
  // 
  /////////////////////////////////////////////////////// 
 function globalCollectHamper(player,hamper) {
    console.log("*** player overlap hamper");


    this.CollectSnd = this.sound.add("collect").setVolume(0.9);
    // play the sound
    this.CollectSnd.play()

	// increase key count
    window.hamper++;

  // Update the item counter text
  this.itemCountText.setText("Items: " + window.item + "/5");

    //when hit hamper
    hamper.disableBody(true, true);
    updateInventory.call(this)
    

 
}

 ////////////////////////////////////////////////////////
  //lvl2
  // access this function with globalDropHamper
  // Uses a JS function to prevent repeated codes
  // 
  /////////////////////////////////////////////////////// 
  function globalDropHamper(player,table123) {
    console.log("*** player drop hamper");

   this.CollectSnd = this.sound.add("collect").setVolume(0.9);
    // play the sound
    this.CollectSnd.play()

	// increase key count
    window.table++;

    //when hit table
    updateInventory.call(this)

   // Create a new hamper sprite at the table's position
  //  let emptable = this.physics.add.sprite(table123.x, table123.y, 'emptable').setImmovable(true);
   let hamper = this.physics.add.sprite(table123.x, table123.y-30, 'hamper').setScale(0.7).setImmovable(true);
    this.physics.add.collider(player,hamper);
    table123.disableBody(true,false)

  
}

  ////////////////////////////////////////////////////////
  //
  // access this function with globalCollectAngpao
  // Uses a JS function to prevent repeated codes
  // 
  /////////////////////////////////////////////////////// 
  function globalCollectAngpao(player,angpao) {
    console.log("*** player overlap angpao");


    this.CollectSnd = this.sound.add("collect").setVolume(0.9);
    // play the sound
    this.CollectSnd.play()

	// increase key count
    window.angpao++;

    //when hit hamper
    angpao.disableBody(true, true);
    updateInventory.call(this)

    if (window.angpao == 5){
	    console.log("*** win3");
      this.scene.start("win3");
    }
}
