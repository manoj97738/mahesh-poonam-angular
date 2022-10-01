import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomCommonModule } from './../custom.common.module';
import { AdminRoutingModule } from './admin.routing';




@NgModule({
  declarations: [


  ],
  imports: [
    AdminRoutingModule, // routing module
    CustomCommonModule
  ],
  exports: [],

})
export class AdminModule { }
