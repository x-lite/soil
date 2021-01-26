// Add your code here
class Probe {

    inPin: AnalogPin;
    outPin: AnalogPin;

    constructor() {
        this.inPin = AnalogPin.P0;
        this.outPin = AnalogPin.P3;
    }

    public scan(): number{    
        pins.analogWritePin(this.outPin, 1023);
        let scanVal = pins.analogReadPin(this.inPin);
        serial.writeNumber(scanVal);
        if(scanVal > 900) {
            return 5;
        } else if (scanVal > 700) {
            return 4;
        } else if (scanVal > 500) {
            return 3;
        } else if (scanVal > 300) {
            return 2;
        } else {
            return 1;
        }
    }
}