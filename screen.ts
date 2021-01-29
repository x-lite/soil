class Screen {

    results: MoistureLevel[];
    logger: Logger;
    
    constructor(logger: Logger) {
        this.logger = logger;
        this.results = [];
    }
    
    public startUp() {
        basic.showIcon(IconNames.Asleep);
    }

    public ready() {
        basic.showIcon(IconNames.Cow);
    }

    public reset() {
        basic.clearScreen();
        this.results = [];
    }

    public addResult(moistureLevel: MoistureLevel) {
        this.results.push(moistureLevel);
        this.drawBar(moistureLevel, this.results.length -1);
    }

    public drawChart() {
        basic.clearScreen();
        this.results.forEach(function (value: MoistureLevel, index: number) {
            this.drawBar(value, index)
        })
    }

    public drawBar(moistureLevel: MoistureLevel, xPosition: number) {
        for(let i = 0; i < moistureLevel; i++) {
            led.plot(xPosition, 4-i);
        }
    }

    public flashChart(numberOfTimes: number) {
        for(let i = 0; i < numberOfTimes; i++) {
            basic.clearScreen();
            basic.pause(250);
            this.drawChart();
            basic.pause(250);
        }
    }

    public allGood() {
        basic.showIcon(IconNames.Heart);
    }

    public notSure() {
        basic.showIcon(IconNames.Target);
    }
    
    public needsWater() {
        basic.showIcon(IconNames.Sad);
    }
    
}
