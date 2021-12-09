let tool = 0
input.onButtonPressed(Button.A, function () {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (tool == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
    }
})
