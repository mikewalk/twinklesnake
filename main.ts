input.onButtonPressed(Button.A, function () {
    Clockwise = false
})
input.onButtonPressed(Button.B, function () {
    Clockwise = true
})
let snakeTailCoord = 0
let snakeMidCoord = 0
let light2 = 0
let Clockwise = false
basic.clearScreen()
let coordsListX = "0000012344444321"
let coordsListY = "0123444443210000"
let snakeHeadCoord = 0
snakeHeadCoord = 0
snakeHeadCoord = 0
Clockwise = false
basic.forever(function () {
    light2 = Math.map(input.lightLevel(), 0, 255, 25, 230)
    led.plotBrightness(2, 3, light2 - randint(0, 25))
    led.plotBrightness(2, 1, light2 - randint(0, 25))
    led.plotBrightness(2, 2, light2 + randint(0, 25))
    led.plotBrightness(1, 2, light2 - randint(0, 25))
    led.plotBrightness(3, 2, light2 - randint(0, 25))
})
basic.forever(function () {
    for (let index = 0; index <= coordsListX.length - 1; index++) {
        led.unplot(parseFloat(coordsListX.substr(index, 1)), parseFloat(coordsListY.substr(index, 1)))
    }
    led.plotBrightness(parseFloat(coordsListX.substr(snakeHeadCoord, 1)), parseFloat(coordsListY.substr(snakeHeadCoord, 1)), 255)
    led.plotBrightness(parseFloat(coordsListX.substr(snakeMidCoord, 1)), parseFloat(coordsListY.substr(snakeMidCoord, 1)), 128)
    led.plotBrightness(parseFloat(coordsListX.substr(snakeTailCoord, 1)), parseFloat(coordsListY.substr(snakeTailCoord, 1)), 64)
    snakeTailCoord = snakeMidCoord
    snakeMidCoord = snakeHeadCoord
    if (Clockwise) {
        snakeHeadCoord += 1
        snakeHeadCoord = snakeHeadCoord % coordsListX.length
    } else {
        snakeHeadCoord += -1
        if (snakeHeadCoord == -1) {
            snakeHeadCoord = coordsListX.length
        }
    }
    basic.pause(100)
})
