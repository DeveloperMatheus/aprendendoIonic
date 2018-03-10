import { Component } from '@angular/core';
import { ApiProvider } from './../../providers/api/api';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.films = this.apiProvider.getFilms();
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
