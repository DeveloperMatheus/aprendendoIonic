import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openDetails() {
    // this.navCtrl.push('FilmDetailsPage');
    this.navCtrl.push('FilmDetailsPage', {filmId: 2});
    // Passo parâmetros utilizando o método push e coloco estes parâmetros usando o segundo argumento.
    // Na página FilmDetailsPage eu pego este parâmetro e posso cuspir no html utilizando o método get dentro do ts da própria FilmDetailsPage
  }

  goToPlanets() {
    this.navCtrl.parent.select(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }

}
