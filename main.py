def on_button_pressed_a():
    player.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global playerfire
    playerfire = game.create_sprite(player.get(LedSpriteProperty.X),
        player.get(LedSpriteProperty.Y))
    playerfire.set(LedSpriteProperty.BRIGHTNESS, 100)
    for index in range(4):
        playerfire.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if playerfire.is_touching(enemy):
            game.add_score(1)
        elif playerfire.get(LedSpriteProperty.Y) <= 0:
            playerfire.delete()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    player.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

enemyfire: game.LedSprite = None
playerfire: game.LedSprite = None
enemy: game.LedSprite = None
player: game.LedSprite = None
game.set_life(4)
game.set_score(0)
player = game.create_sprite(2, 4)
enemy = game.create_sprite(0, -4)

def on_forever():
    global enemyfire
    enemy.move(1)
    basic.pause(100)
    enemy.if_on_edge_bounce()
    enemyfire = game.create_sprite(enemy.get(LedSpriteProperty.X),
        enemy.get(LedSpriteProperty.Y))
    enemyfire.set(LedSpriteProperty.BRIGHTNESS, 100)
    for index2 in range(4):
        enemyfire.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        if enemyfire.is_touching(player):
            game.remove_life(1)
        elif enemyfire.get(LedSpriteProperty.Y) >= 4:
            enemyfire.delete()
basic.forever(on_forever)
