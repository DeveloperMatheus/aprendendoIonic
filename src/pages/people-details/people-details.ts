import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PeopleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people-details',
  templateUrl: 'people-details.html',
})
export class PeopleDetailsPage {
  isHearted: any;
  anim: any;
  pessoa:any;
  lottieConfig: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    ) {
    this.pessoa = this.navParams.get('pessoa');
    
    this.lottieConfig = {
      path: 'assets/curtida.json',
      autoplay: false,
      loop: false,
      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleDetailsPage');
  }
  
  handleAnimation(anim: any) {
    this.anim = anim;
  }

//   handleAnimation(anim: any) {
//     this.anim = anim;

//     if (this.isHearted) {
//         this.anim.goToAndStop(25, true); //last frame. on state.
//         this.isHearted = false;
//     }
//     else {
//         this.anim.goToAndStop(0, true); //first frame. off state.
//         this.isHearted = true;
//     }
// }

  // stop() {
  //   this.anim.stop();
  // }

  play() {
    this.anim.play();
  }

  // pause() {
  //   this.anim.pause();
  // }

  // setSpeed(speed: number) {
  //   this.animationSpeed = speed;
  //   this.anim.setSpeed(speed);
  // }

}
