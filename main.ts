input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    playerfire = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    playerfire.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        playerfire.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (playerfire.isTouching(enemy)) {
            game.addScore(1)
            playerfire.delete()
        } else if (playerfire.get(LedSpriteProperty.Y) <= 0) {
            playerfire.delete()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let enemyfire: game.LedSprite = null
let LR = 0
let playerfire: game.LedSprite = null
let enemy: game.LedSprite = null
let player: game.LedSprite = null
game.setLife(4)
game.setScore(0)
player = game.createSprite(2, 4)
enemy = game.createSprite(0, -4)
basic.forever(function () {
    LR = randint(1, 2)
    if (LR == 1) {
        enemy.ifOnEdgeBounce()
        enemy.move(1)
        enemy.ifOnEdgeBounce()
    } else if (LR == 2) {
        enemy.ifOnEdgeBounce()
        enemy.move(-1)
        enemy.ifOnEdgeBounce()
    }
    basic.pause(100)
    enemy.ifOnEdgeBounce()
    enemyfire = game.createSprite(enemy.get(LedSpriteProperty.X), enemy.get(LedSpriteProperty.Y))
    enemyfire.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        enemyfire.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        if (enemyfire.isTouching(player)) {
            game.removeLife(1)
            enemyfire.delete()
        } else if (enemyfire.get(LedSpriteProperty.Y) >= 4) {
            enemyfire.delete()
        }
    }
    enemy.ifOnEdgeBounce()
})
