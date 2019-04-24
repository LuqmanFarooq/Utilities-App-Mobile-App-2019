import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TicketsProvider} from '../../providers/tickets/tickets';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
ticket:any = [];
keywords:string;
  constructor(public navCtrl: NavController,private anyvarhere:TicketsProvider ) {

  }
  search(){
    this.anyvarhere.getTicketsInfo(this.keywords).subscribe(data =>{
    this.ticket = data._embedded.events;
    });
  }
}
