var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var laser1= createSprite(200,100,10, 200);
    laser1.shapeColor="red";
    laser1.velocityX=8;
var laser2= createSprite(300,280,200, 10);
    laser2.shapeColor="red";
    laser2.velocityY=2;
var laser3 = createSprite(44 ,307 ,10, 200);
    laser3.shapeColor="red";
    laser3. velocityX=2;
var diamond= createSprite(0 ,0, 100, 100)
    diamond.shapeColor="lightblue"
var thief = createSprite(380, 380, 20,20);
    thief.shapeColor="black"


function draw() {
  background("white");
  
  if (keyDown("up")) {
    thief.y=thief.y-10;
  }
  
  if (keyDown("down")) {
    thief.y=thief.y+10;
  }
  
  if (keyDown("left")) {
    thief.x=thief.x-10;
  }
  
  if (keyDown("right")) {
    thief.x=thief.x+10;
  }
  
  
  if (laser1.isTouching(thief) || laser2.isTouching(thief) || laser3.isTouching(thief)) {
    stroke(0)
    fill(0)
    textSize(30);
    text("THIEF IS CAUGHT",90,220);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    laser3.setVelocity(0,0)
    thief.setVelocityY(0);
    
    
  }
  
  
  
  if (thief.isTouching(diamond)) {
    stroke(0)
    fill(0)
    textSize(50);
    text("YOU WIN!",100,220);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    laser3.setVelocity(0,0);
    thief.setVelocityY(0);
    
  
} 



  
  createEdgeSprites()
  thief.bounce(edges);
  laser1.bounceOff(edges)
  laser2.bounceOff(edges)
  laser3.bounceOff(edges)
  laser1.bounceOff(diamond)
  laser2.bounceOff(diamond)
  laser3.bounceOff(edges)
  
 
 
  drawSprites();

}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
