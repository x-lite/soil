/*
 *. Set up
 */
let leds = new LEDs();
let screen = new Screen();

function aClicked() {
    screen.reset();
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
        basic.pause(750);
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
}

function getReading() {
    return randint(1,5);
}
input.onButtonPressed(Button.A, aClicked);
input.onButtonPressed(Button.B, bClicked)


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


screen.reset();
//loadingRoutine();



//basic.forever(loadingRoutine());




 




