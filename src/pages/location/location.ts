import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  //variables
  latitute: number;
  longitute: number;
  storeLatitute: number;
  storeLongitute: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private loc: Geolocation,private storage: Storage) {
  }

  ionViewDidLoad(){
    //Getting GeoLocation coordinatess
    this.loc.getCurrentPosition().then((data) => {
      //Latitude
      this.latitute = data.coords.latitude; 
      //longitude
      this.longitute = data.coords.longitude; 
      // calling save method
      this.saveGPS();
      this.lastGPS();
      }).catch((error) => {
      console.log('Error getting location', error)
    });    
  }

  lastGPS(){
     //Get Last GPS Latitude
    this.storage.get('lastLatitude').then((val) => {
      this.storeLatitute = val;
    });
    //Get Last GPS Longitude
    this.storage.get('lastLongitude').then((val) => {
      this.storeLongitute = val;
    });
  }

  saveGPS(){
    //Save current latitude and longitude
    this.storage.set('lastLatitude', this.latitute);
    this.storage.set('lastLongitude', this.longitute);
  }

}