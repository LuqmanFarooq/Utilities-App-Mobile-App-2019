import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import {NewsPage} from '../pages/news/news';
import {LocationPage} from '../pages/location/location';
import{AppinfoPage} from '../pages/appinfo/appinfo';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsProvider } from '../providers/news/news';
import {HttpClientModule} from '@angular/common/http';
import { TicketsProvider } from '../providers/tickets/tickets';
import {FormsModule} from '@angular/forms';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    NewsPage,
    LocationPage,
    AppinfoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    NewsPage,
    LocationPage,
    AppinfoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Screenshot,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider,
    TicketsProvider,
    Geolocation
  ]
})
export class AppModule {}
