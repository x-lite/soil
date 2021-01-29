function nextSoilType () {
    logger.debug("soilType in:" + selectedSoilType);
    if (selectedSoilType == SoilType.Wet) {
        logger.debug("setting to Medium");
        selectedSoilType = SoilType.Medium;
    } else if (selectedSoilType == SoilType.Medium) {
        logger.debug("setting to Dry");
        selectedSoilType = SoilType.Dry;
    } else {
        logger.debug("setting to Wet");
        selectedSoilType = SoilType.Wet
    }
    logger.debug("soilType out:" + selectedSoilType);
    leds.showSoilSetting(selectedSoilType);
}

function runAScan () {
    screen.reset();
    for (let index = 0; index < 5; index++) {
        val = getReading()
        total += val
        screen.addResult(val);
        leds.slide();
    }
    screen.flashChart(3);
    avg = total / 5
    if (avg > selectedSoilType+1) {
        screen.allGood();
    } else if (avg == selectedSoilType+1) {
        screen.notSure();
    } else {
        screen.needsWater();
    }
    leds.showSoilSetting(selectedSoilType);
}


function aClicked () {
    screen.reset();
    nextSoilType()
}
function bClicked () {
    runAScan()
}

function loadingRoutine () {
    screen.startUp();
    leds.blinkSingle(leds.blue, 5, 150);
    leds.slide();
    leds.slide();
    leds.blinkSingle(leds.blue, 5, 50);
    leds.allFlash(3, 100);
    screen.ready();
    basic.pause(100)
    screen.reset();
    basic.pause(100)
}

function getReading () {
    return probe.scan()
}

declare enum SoilType {
    Wet = 3,
    Medium = 2, 
    Dry = 1
}

declare enum MoistureLevel {
    Wet = 5,
    Damp = 4,
    Medium = 3,
    Dry = 2,
    Arrid = 1
}

let avg = 0
let total = 0
let val = 0
let logger = new Logger(true, true, true);
let leds = new LEDs(logger);
let screen = new Screen(logger);
let probe = new Probe(logger);
let selectedSoilType = SoilType.Wet;

input.onButtonPressed(Button.A, aClicked);
input.onButtonPressed(Button.B, bClicked)
loadingRoutine()
screen.reset();
leds.showSoilSetting(selectedSoilType);
logger.info("Ready")

//let inPin = AnalogPin.P0;
//let outPin = AnalogPin.P3;
// basic.forever(function () {
//     pins.analogWritePin(outPin, 1023);
//     let scanVal = pins.analogReadPin(inPin);
//     logger.data(scanVal) 
//     basic.pause(250)
// })