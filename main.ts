bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    Data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
})
let Data = ""
bluetooth.startUartService()
basic.forever(function () {
    if (Data == "r") {
        pins.servoWritePin(AnalogPin.P1, 30)
    } else if (Data == "l") {
        pins.servoWritePin(AnalogPin.P1, 150)
    } else if (!(Data == "A") && !(Data == "B") && !(Data == "Z")) {
        pins.servoWritePin(AnalogPin.P1, 90)
    }
})
basic.forever(function () {
    if (Data == "A") {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else if (Data == "B") {
        pins.servoWritePin(AnalogPin.P0, 0)
    } else if (Data == "Z") {
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
