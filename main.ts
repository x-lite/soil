/*
 *. Set up
 */
let leds = new LEDs();
function aClicked() {
    leds.allOff();
}
input.onButtonPressed(Button.A, aClicked);

let screen = new Screen();

function nada(){
  screen.startUp();
  leds.blinkBlue(5, 150)
  leds.slide();
  leds.slide();
  leds.blinkBlue(5, 50)
  leds.allFlash();
  basic.showIcon(IconNames.Happy);
  screen.ready();
  basic.pause(100);
  screen.reset();
  basic.pause(100);
}

screen.addResult(1);
 basic.pause(100);
screen.addResult(2);
 basic.pause(100);
screen.addResult(3);
 basic.pause(100);
screen.addResult(4);
 basic.pause(100);
screen.addResult(5);
 basic.pause(3000);

basic.forever(nada);




 




