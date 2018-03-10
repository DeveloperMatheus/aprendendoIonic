import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {

  pessoas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider:ApiProvider) {
    this.pessoas = this.apiProvider.getPeople();
  }

  openDetails(pessoa) {
    this.navCtrl.push('PeopleDetailsPage', {pessoa: pessoa});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
  }

}
