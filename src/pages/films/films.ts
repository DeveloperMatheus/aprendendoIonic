import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient:HttpClient) {
    this.films = this.httpClient.get('https://swapi.co/api/films');
    this.films.subscribe(data => {
      console.log('my data: ', data);
    })

  }

  openDetails(film) {
    // this.navCtrl.push('FilmDetailsPage');
    // this.navCtrl.push('FilmDetailsPage', {filmId: 2});
    // Passo parâmetros utilizando o método push e coloco estes parâmetros usando o segundo argumento.
    // Na página FilmDetailsPage eu pego este parâmetro e posso cuspir no html utilizando o método get dentro do ts da própria FilmDetailsPage

    this.navCtrl.push('FilmDetailsPage', {film: film});
  }

  goToPlanets() {
    this.navCtrl.parent.select(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }

}
