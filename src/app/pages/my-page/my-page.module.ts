import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MyPagePageRoutingModule } from './my-page-routing.module';
import { MyPagePage } from './my-page.page';
import { NetworkInterface } from '@awesome-cordova-plugins/network-interface/ngx'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPagePageRoutingModule
  ],
  declarations: [MyPagePage],
  providers: [NetworkInterface],
})
export class MyPagePageModule {}
