import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx'
import { FCM } from '@awesome-cordova-plugins/fcm/ngx'
import { AppAvailability } from '@awesome-cordova-plugins/app-availability/ngx'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BackgroundMode,
    FCM,
    AppAvailability,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
