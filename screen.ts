class Screen {

    results: number[];

    constructor() {
        this.results = [];
    }
    
    public startUp() {
        basic.showIcon(IconNames.Asleep);
    }

    public ready() {
        basic.showIcon(IconNames.Fabulous);
    }

    public reset() {
        basic.clearScreen();
        this.results = [];
    }

    public addResult(oneToFive: number) {
        if(oneToFive > 5) oneToFive = 5;
        if(oneToFive < 1) oneToFive = 1;
        this.results.push(oneToFive);
        this.drawBar(oneToFive, this.results.length -1);
    }

    public drawChart() {
        basic.clearScreen();
        this.results.forEach(function (value: number, index: number) {
            this.drawBar(value, index)
        })
    }

    public drawBar(value: number, index: number) {
        for(let i = 0; i < value; i++) {
            led.plot(index, 4-i);
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
