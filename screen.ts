class Screen {

    results: number[];

    constructor() {
        this.results = [];
    }
    
    public startUp() {
        basic.showIcon(IconNames.Asleep);
    }

    public ready() {
        basic.showIcon(IconNames.Happy);
    }

    public reset() {
        basic.clearScreen();
    }

    public addResult(oneToFive: number) {
        if(oneToFive > 5) oneToFive = 5;
        if(oneToFive < 1) oneToFive = 1;
        this.results.push(oneToFive);
        this.drawBar(oneToFive, this.results.length -1);
    }

    public drawBar(value: number, index: number) {
        for(let i = 0; i < value; i++) {
            led.plot(index, 4-i);
        }
    }

    public redraw() {
        this.reset();
        this.results.forEach(function (value: number, index: number) {
            this.drawBar(value, index)
        })
    }
    
}
