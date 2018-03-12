import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetailsPage {

  planetFound: any;
  film:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider:ApiProvider) {
    this.film = this.navParams.get('film');
    console.log(this.film)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmDetailsPage');
    const filmPlanets = this.film.planets;
    this.film.planets = [];
    filmPlanets.map(planet => {
      this.apiProvider.getPlanet(planet, planetFound => {
        this.film.planets.push(planetFound);
        console.log(filmPlanets);
      })
      
    }) 
  }
}
