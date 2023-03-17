let isWalking = false
radio.setGroup(1)

basic.forever(function () {

    let distencesensor = sonar.ping(
        DigitalPin.P6,
        DigitalPin.P5,
        PingUnit.Centimeters
    )
    if(isWalking == true){
        if (distencesensor <= 5) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)

    }
    
    
   
})

radio.onReceivedString(function(receivedString){
    if (receivedString == "start"){
        isWalking = true
    } else if (receivedString == "stop"){
        isWalking == false
    }
})





