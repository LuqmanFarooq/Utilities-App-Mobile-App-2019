import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TicketsProvider} from '../../providers/tickets/tickets';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // variables
ticket:any = [];
keywords:string;
// constructor
  constructor(public navCtrl: NavController,private anyvarhere:TicketsProvider ) {

  }

  // search function with two way data binding to get events in specified city
  search(){
    this.anyvarhere.getTicketsInfo(this.keywords).subscribe(data =>{
    this.ticket = data._embedded.events;
    });
  }
}
