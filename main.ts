basic.forever(function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
    if (pins.analogReadPin(AnalogPin.P0) <= 50) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    basic.pause(500)
})
