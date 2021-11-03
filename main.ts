let starts = 0
let elapsed = 0
input.onButtonPressed(Button.A, function () {
    starts = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - starts
    basic.showNumber(elapsed / 1000)
})
