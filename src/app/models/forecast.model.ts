export class Forecast {
    hour: string;
    temp: string;

    constructor(dt_txt: string, newTemp: string) {
        this.hour = dt_txt.substring(11, 16);
        this.temp = newTemp;
    }
}