import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { MapsPage } from '../pages/maps/maps';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GeoDetailComponent } from '../pages/home/geo-detail.components';
import { UserService } from '../pages/UserService/UserService';

@NgModule({
  declarations: [
    MyApp,
    MapsPage,
    ContactPage,
    HomePage,
    TabsPage,
    GeoDetailComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapsPage,
    ContactPage,
    HomePage,
    TabsPage,
    GeoDetailComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, UserService]
})
export class AppModule {}
