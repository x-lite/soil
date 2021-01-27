// Add your code here
class Probe {

    inPin: AnalogPin;
    outPin: AnalogPin;

    constructor() {
        this.inPin = AnalogPin.P0;
        this.outPin = AnalogPin.P3;
    }

    public scan(): MoistureLevel{    
        pins.analogWritePin(this.outPin, 1023);
        let scanVal = pins.analogReadPin(this.inPin);
        serial.writeNumber(1000);
        if(scanVal > 900) {
            return MoistureLevel.Wet;
        } else if (scanVal > 800) {
            return MoistureLevel.Damp;
        } else if (scanVal > 600) {
            return MoistureLevel.Medium;
        } else if (scanVal > 400) {
            return MoistureLevel.Dry;
        } else {
            return MoistureLevel.Arrid;
        }
    }
}