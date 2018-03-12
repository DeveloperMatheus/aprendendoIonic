import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getFilms() {
    return this.http.get('https://swapi.co/api/films');
  }

  getPeople() {
    return this.http.get('https://swapi.co/api/people');
  }

  getPlanets() {
    return this.http.get('https://swapi.co/api/planets');
  }

  getPlanet(url, callback) {
    this.http.get(url)
    .subscribe(planet => {
      return callback(planet);
    })
  }
}
