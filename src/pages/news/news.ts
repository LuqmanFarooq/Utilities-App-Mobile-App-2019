import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NewsProvider} from '../../providers/news/news';
import { Screenshot } from '@ionic-native/screenshot/ngx';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  // variables
  news:any =[];
  screen:any;
  state:boolean = false;

  // constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, private anyvarhere:NewsProvider,private screenshot: Screenshot) {
  }
  // retrieveing information from api data
  ionViewDidLoad(){
    this.anyvarhere.getNewsInfo().subscribe(data =>{
    this.news = data.articles;
    });
  }
  // timer till the screenshot show on the screen
  reset(){
    var self = this;
    setTimeout(function() {
      self.state = false;
    },1000);
  }
// screenshot function
  screenshotUri(){
    this.screenshot.URI(80).then(res => {
      this.screen = res.URI;
      this.state = true;
      this.reset();
    });
  }
}
