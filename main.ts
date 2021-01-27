function nextSoilType () {
    if (selectedSoilType == SoilType.Wet) {
        selectedSoilType = SoilType.Medium;
    } else if (selectedSoilType == SoilType.Medium) {
        selectedSoilType = SoilType.Dry;
    } else {
        selectedSoilType = SoilType.Wet
    }
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
    if (avg > selectedSoilType) {
        screen.allGood();
    } else if (avg == selectedSoilType) {
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

let avg = 0
let total = 0
let val = 0

declare enum SoilType {
    Wet = 4,
    Medium = 3, 
    Dry = 2
}

declare enum MoistureLevel {
    Wet = 5,
    Damp = 4,
    Medium = 3,
    Dry = 2,
    Arrid = 1
}

let leds = new LEDs();
let screen = new Screen();
let probe = new Probe();
let selectedSoilType = SoilType.Wet;

input.onButtonPressed(Button.A, aClicked);
input.onButtonPressed(Button.B, bClicked)
loadingRoutine()
screen.reset();
leds.showSoilSetting(selectedSoilType);
serial.writeLine("Ready")
serial.writeNumber(500)
serial.writeNumber(10000)
