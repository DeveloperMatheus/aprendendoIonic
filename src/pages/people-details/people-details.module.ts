import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeopleDetailsPage } from './people-details';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [
    PeopleDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PeopleDetailsPage),
    LottieAnimationViewModule.forRoot()
  ],
})
export class PeopleDetailsPageModule {}
