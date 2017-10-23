import { NgModule, Component, Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';

import { Weather } from '../models/weather.model';

@Injectable()
export class WeatherService {

    apiRoot = 'http://api.openweathermap.org/data/2.5/weather';
    result: Weather;

    constructor(private http: Http) {
        this.result = new Weather('', '');
    }

    search(city: String) {
        const promise = new Promise((resolve, reject) => {
            const apiURL = `${this.apiRoot}?q=${city}&units=metric&appid=9ee6b377a65b0bf55a592a22cd39f187`;
            this.http.get(apiURL)
                .toPromise()
                .then(
                res => {
                    this.result = new Weather (res.json().main.temp, res.json().wind.speed);
                    resolve();
                },
                msg => {
                    reject(msg);
                }
            );
        });
        return promise;
    }
}