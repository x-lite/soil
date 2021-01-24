class LEDs {

    yellow: AnalogPin;
    blue: AnalogPin;
    green: AnalogPin;
    red: AnalogPin;
    ledIndex: number;
    leds: AnalogPin[];     

    constructor() {
        this.yellow = AnalogPin.P1;
        this.blue = AnalogPin.P2;
        this.green = AnalogPin.P8;
        this.red = AnalogPin.P16;
        this.ledIndex = 0;
        this.leds = [this.red,this.yellow, this.blue, this.green];  
    }


    public allFlash() {
        this.allOff();
        this.allOn();
        basic.pause(100);
        this.allOff();
        basic.pause(100);
        this.allOn();
        basic.pause(100);
        this.allOff();
    }

    public slide() {
        for(let i = 0; i < this.leds.length; i++) {
            this.allOff();
            pins.analogWritePin(this.leds[i], 500)
            basic.pause(100);
        }
        for(let i = this.leds.length -1; i >= 0 ; i--) {
            this.allOff();
            pins.analogWritePin(this.leds[i], 500)
            basic.pause(100);
        }
    }

    public next(step: number) {
        this.allOff();
        this.ledIndex += step;
        if(this.ledIndex >= this.leds.length) {
            this.ledIndex = 0;
        } else if(this.ledIndex <= 0) {
            this.ledIndex = this.leds.length - 1;
        }

        pins.analogWritePin(this.leds[this.ledIndex], 1)
    }

    public allOff() {
        this.leds.forEach(function (value: AnalogPin, index: number) {
            pins.analogWritePin(value, 0);
        })
    }

    public allOn() {
        this.leds.forEach(function (value: AnalogPin, index: number) {
            pins.analogWritePin(value, 500);            
        })
    }

    public blinkBlue(blinks: number, delay: number) {
        for(let i = 0; i < blinks; i++) {
            pins.analogWritePin(this.blue, 500);
            basic.pause(delay);
            pins.analogWritePin(this.blue, 0);
            basic.pause(delay);
        }
    }
}
