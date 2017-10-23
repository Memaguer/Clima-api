import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable} from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { ForecastService } from './services/forecast.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [WeatherService, ForecastService],
    bootstrap: [AppComponent]
})
export class AppModule { }
