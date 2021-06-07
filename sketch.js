var backGroundImg, bgSprite
var player, playerSprite
var gameState = "start"
var button
var titan, titanSprite
var rand


function preload() {
  backGroundImg = loadImage('images/bg.jpg')
  player = loadImage('images/eren.png')
  titan = loadImage('images/titan.png')
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  bgSprite = createSprite(width / 2, height / 2, width, height)
  bgSprite.addImage(backGroundImg)
  bgSprite.scale = 2.4
  bgSprite.velocityX = -2

  playerSprite = createSprite(200, 500, 20, 20)
  playerSprite.addImage(player)
  playerSprite.visible = false

  button = createButton("Play")
  button.position(100, 50)


}

function draw() {
  background(205, 153, 0);

  if (bgSprite.x < 0) {
    bgSprite.x = bgSprite.width / 2
  }

  button.mousePressed(() => {
    gameState = "play"
    button.hide()
  })

  if (gameState === "play") {
    playerSprite.visible = true

    spawnTitans()

    if (keyDown(UP_ARROW)) {
      player.velocityY = player.velocityX - 2
    }

    if (keyDown(DOWN_ARROW)) {
      player.velocity = player.velocityY + 2
    }
    if (keyDown(RIGHT_ARROW)) {
      player.velocityX = player.velocityX + 2
    }
    if (keyDown(LEFT_ARROW)) {
      player.velocityX = player.velocityX - 2
    }

  }



  drawSprites();

  if (gameState === "start") {
    textSize(20)
    text("It is set in a world where humanity lives inside cities surrounded by three enormous walls that protect them from the gigantic man-eating humanoids referred to as Titans. The story follows Eren Yeager, who vows to exterminate the Titans and avenge his loved ones who he has lost to the titans. ", 200, 200)

  }

}

function spawnTitans() {
  rand = Math.round(random(200, 300))

  titanSprite = createSprite(500, 500, 20, 20)
  titanSprite.addImage(titan)


}

