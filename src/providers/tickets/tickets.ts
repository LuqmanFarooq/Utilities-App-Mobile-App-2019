import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class TicketsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TicketsProvider Provider');
  }
  // api call method
  getTicketsInfo(keyword:string):Observable<any>{
    return this.http.get('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=IE&apikey=sCYzbMTB6SUF4JFYzADMqPINGJsxqBaW&keyword='+keyword);
}
}
