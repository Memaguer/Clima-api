import { NgModule, Component, Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';

import { Forecast } from '../models/forecast.model';

@Injectable()
export class ForecastService {

    apiRoot = 'http://api.openweathermap.org/data/2.5/forecast';
    results: Forecast[];

    constructor(private http: Http) {
        this.results = [];
    }

    search(city: String) {
        const promise = new Promise((resolve, reject) => {
            const apiURL = `${this.apiRoot}?q=${city}&units=metric&cnt=5&appid=9ee6b377a65b0bf55a592a22cd39f187`;
            this.http.get(apiURL)
                .toPromise()
                .then(
                res => {
                    this.results = res.json().list.map(item => {
                        return new Forecast(
                            item.dt_txt,
                            item.main.temp
                        );
                    });
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