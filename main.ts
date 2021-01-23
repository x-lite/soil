
class LEDs {

    yellow: DigitalPin;
    blue: DigitalPin;
    green: DigitalPin;
    red: AnalogPin;
    ledIndex: number;
    leds: DigitalPin[];     

    constructor() {
        this.yellow = DigitalPin.P1;
        this.blue = DigitalPin.P2;
        this.green = DigitalPin.P8;
        this.red = AnalogPin.P5;
        this.ledIndex = 0;
        this.leds = [this.yellow, this.blue, this.green];  
    }

    public next() {
        this.allOff();
        this.ledIndex++;
        if(this.ledIndex >= this.leds.length) {
            this.ledIndex = 0
        }
        pins.digitalWritePin(this.leds[this.ledIndex], 1)
    }

    public allOff() {
        this.leds.forEach(function (value: DigitalPin, index: number) {
            pins.digitalWritePin(value, 0);
        })
    }

    public allOn() {
        this.leds.forEach(function (value: DigitalPin, index: number) {
            pins.digitalWritePin(value, 1);
        })
    }

    public blinkBlue(blinks: number, delay: number) {
        for(let i = 0; i < blinks; i++) {
            pins.digitalWritePin(this.blue, 1)
            basic.pause(delay);
            pins.digitalWritePin(this.blue, 0)
            basic.pause(delay);
        }
    }
}


/*
 *. Set up
 */
let leds = new LEDs();
function aClicked() {
    leds.allOff();
}
input.onButtonPressed(Button.A, aClicked);
function nada(){
    leds.next();
    basic.pause(100);
}
leds.blinkBlue(10, 250)
basic.forever(nada);




 




