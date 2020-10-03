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

var sofia = createSprite(15,15,15,15);
var cardboard1 = createSprite(310,350,20,120);
var cardboard2 = createSprite(350,240,100,20);
var cardboard3 = createSprite(30,75,100,20);
var cardboard4 = createSprite(120,35,20,100);
var cardboard5 = createSprite(80,120,200,20);
var cardboard6 = createSprite(190,165,20,70);
var cardboard7 = createSprite(190,240,120,20);
var cardboard8 = createSprite(170,75,20,110);
var cardboard9 = createSprite(300,50,20,120);
var cardboard10 = createSprite(220,40,20,120);
var cardboard11 = createSprite(200,140,120,20);
var cardboard12 = createSprite(290,140,120,20);
var cardboard13 = createSprite(350,90,20,120);
var cardboard14 = createSprite(260,240,20,120);
var cardboard15 = createSprite(310,240,120,20);
var cardboard16 = createSprite(360,210,20,60);
var cardboard17 = createSprite(310,170,20,70);
var cardboard18 = createSprite(260,90,10,80);
var cardboard19 = createSprite(190,300,20,120);
var cardboard20 = createSprite(100,240,120,20);
var cardboard21 = createSprite(100,250,20,180);
var cardboard22 = createSprite(145,340,20,120);
var cup = createSprite(380,380,15,15);

function draw() {
  background("yellow");
  createEdgeSprites();
  sofia.bounceOff(edges);
  sofia.bounce(cup);
  sofia.shapeColor = "blue";
  cup.shapeColor = "grey";
  cardboard1.shapeColor = "brown";
  cardboard2.shapeColor = "brown";
  cardboard3.shapeColor = "brown";
  cardboard4.shapeColor = "brown";
  cardboard5.shapeColor = "brown";
  cardboard6.shapeColor = "brown";
  cardboard7.shapeColor = "brown";
  cardboard8.shapeColor = "brown";
  cardboard9.shapeColor = "brown";
  cardboard10.shapeColor = "brown";
  cardboard11.shapeColor = "brown";
  cardboard12.shapeColor = "brown";
  cardboard13.shapeColor = "brown";
  cardboard14.shapeColor = "brown";
  cardboard15.shapeColor = "brown";
  cardboard16.shapeColor = "brown";
  cardboard17.shapeColor = "brown";
  cardboard18.shapeColor = "brown";
  cardboard19.shapeColor = "brown";
  cardboard20.shapeColor = "brown";
  cardboard21.shapeColor = "brown";
  cardboard22.shapeColor = "brown";
  if(sofia.isTouching(cardboard1) ||sofia.isTouching(cardboard2)||sofia.isTouching(cardboard3) || sofia.isTouching(cardboard4)  || sofia.isTouching(cardboard5) || sofia.isTouching(cardboard6) || sofia.isTouching(cardboard7) || sofia.isTouching(cardboard8) || sofia.isTouching(cardboard9) || sofia.isTouching(cardboard10) || sofia.isTouching(cardboard11) || sofia.isTouching(cardboard12) || sofia.isTouching(cardboard13) || sofia.isTouching(cardboard14) || sofia.isTouching(cardboard15) || sofia.isTouching(cardboard16) || sofia.isTouching(cardboard17) || sofia.isTouching(cardboard18) || sofia.isTouching(cardboard19) || sofia.isTouching(cardboard20) || sofia.isTouching(cardboard21) || sofia.isTouching(cardboard22)){
   sofia.x=10;
   sofia.y=10;
  }
  if(keyDown(LEFT_ARROW)){
   sofia.x = sofia.x-4;
  }
  if(keyDown(RIGHT_ARROW)){
    sofia.x = sofia.x+4;
  }
  if(keyDown("SPACE")){
    sofia.y = sofia.y-4;
  }
  if(keyDown(DOWN_ARROW)){
    sofia.y = sofia.y+4;
  }
  if(sofia.isTouching(cup) ){
    text("YOU WON",200,200);
    }
    if(sofia.isTouching(cup)){
      sofia.x=10;
      sofia.y=10;
    }
  text("touch me ",350,370);
  
  
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
