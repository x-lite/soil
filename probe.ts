// Add your code here
class Probe {

    inPin: AnalogPin;
    outPin: AnalogPin;
    logger: Logger;

    constructor(logger: Logger) {
        this.inPin = AnalogPin.P0;
        this.outPin = AnalogPin.P3;
        this.logger = logger;
    }

    public scan(): MoistureLevel{    
        pins.analogWritePin(this.outPin, 1023);
        let scanVal = pins.analogReadPin(this.inPin);
        logger.data(scanVal);
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