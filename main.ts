
let yellow = DigitalPin.P1;
let blue = DigitalPin.P2;
let green = DigitalPin.P8;
let red = AnalogPin.P5;
let toggle = true;
let ledIndex = 0;
let leds: DigitalPin[] = [yellow, blue, green]


function simpleLEDtest() {
    basic.pause(1000)
    pins.digitalWritePin(yellow, 1);
    pins.digitalWritePin(blue, 1);
    pins.digitalWritePin(green, 1);
    basic.pause(1000)
    pins.digitalWritePin(yellow, 0);
    pins.digitalWritePin(blue, 0);
    pins.digitalWritePin(green, 0);
}


function aClicked() {
    lightNextLed()
}

function toggleBlue() {
    toggle=!toggle
    pins.digitalWritePin(blue, toggle?1:0)
}

function lightNextLed() {

    ledIndex++;
    if(ledIndex >= leds.length) {
        ledIndex = 0
    }
    leds.forEach(function (value: DigitalPin, index: number) {
        pins.digitalWritePin(value, 0);
    })
    pins.digitalWritePin(leds[ledIndex], 1)
}

function simplyRed() {
    let level = pins.analogReadPin(red);
    if(level > 800) {
        pins.digitalWritePin(blue, 1)
    }
}


/*
 *. Set up
 */
input.onButtonPressed(Button.A, aClicked);
function nada(){}
basic.forever(nada);




 




