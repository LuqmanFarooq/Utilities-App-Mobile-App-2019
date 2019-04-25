import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{HomePage} from '../home/home';
@IonicPage()
@Component({
  selector: 'page-appinfo',
  templateUrl: 'appinfo.html',
})
export class AppinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppinfoPage');
  }

  toHome() {
    this.navCtrl.setRoot(HomePage);
  } // toHome()
}
