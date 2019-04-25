import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{AppinfoPage} from '../appinfo/appinfo';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  totutorial(){
    this.navCtrl.push(AppinfoPage);
  } // toIntro()
}
