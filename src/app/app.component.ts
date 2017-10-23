import { Component } from '@angular/core';

import { WeatherService } from './services/weather.service';
import { ForecastService } from './services/forecast.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    city: string;
    image: string;
    loading = false;

    constructor(public weatherService: WeatherService, public forecastService: ForecastService) {
    }

    onSearch(city: string) {
        this.loading = true;
        this.city = city;
        this.weatherService.search(city);
        this.forecastService.search(city);

        switch (city) {
            case 'London':
                this.image = 'https://cdn.flixbus.de/2017-05/london-header_0.jpg';
                break;
            case 'Berlin':
                this.image = 'https://cdn.flixbus.de/d7files/hi_res_images/header/88_berlin.jpg';
                break;
            case 'Paris':
                this.image = 'http://mondotrips.net/upload/imagini/images/slider/slide1.jpg';
                break;
            case 'Beijing':
                this.image = 'https://www.ulfthausing.at/wp-content/uploads/2016/02/Ulf-Thausing-Fotoreise-China-0091.jpg';
                break;
            case 'Mexico':
                this.image = 'https://www.patrimoniomundial.com.mx/wp-content/uploads/2013/10/Centro-historico-Ciudad-Mexico.jpg';
                break;
            default:
                this.image = 'http://www.omgubuntu.co.uk/wp-content/uploads/2013/12/Flat-Weather-Icon-Set.png';
                   }
    }
}
