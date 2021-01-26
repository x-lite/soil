/*
 * TODO
 *  - Build the probe!
 *
 */
declare enum SoilType {
    Wet = 1,
    Medium =2, 
    Dry = 3
}

let leds = new LEDs();
let screen = new Screen();
let probe = new Probe();

let selectedSoilType = SoilType.Wet;

function nextSoilType() {
    if(selectedSoilType == SoilType.Wet) {
        selectedSoilType = SoilType.Medium;
    } else if(selectedSoilType == SoilType.Medium) {
        selectedSoilType = SoilType.Dry;
    } else {
        selectedSoilType = SoilType.Wet
    }
    leds.showSoilSetting(selectedSoilType);
}


function aClicked() {
    screen.reset();
    nextSoilType();
}

function bClicked() {
    runAScan();
}

function runAScan() {

    screen.reset();
    let total = 0;
    for(let x = 0; x < 5; x++) {
        let val = getReading();
        total+=val;
        screen.addResult(val);
        leds.slide();
    }
    let avg = total/5;
    
    screen.flashChart(3);

    if(avg > 3) {
        screen.allGood();
    } else  if (avg == 3){
        screen.notSure();
    } else {
        screen.needsWater();
    }

    leds.showSoilSetting(selectedSoilType);
}

function getReading() {
    return probe.scan();
}

function loadingRoutine(){
  screen.startUp();
  leds.blinkBlue(5, 150)
  leds.slide();
  leds.slide();
  leds.blinkBlue(5, 50)
  leds.allFlash();
  screen.ready();
  basic.pause(100);
  screen.reset();
  basic.pause(100);
}

input.onButtonPressed(Button.A, aClicked);
input.onButtonPressed(Button.B, bClicked)

loadingRoutine();
screen.reset();
leds.showSoilSetting(selectedSoilType);




 




