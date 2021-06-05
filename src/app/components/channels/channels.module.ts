import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { ChannelsComponent } from './channels.component';
import {AcomponentComponent} from "../acomponent/acomponent.component";


@NgModule({
  declarations: [ChannelsComponent, AcomponentComponent],
  imports: [
    CommonModule,
    ChannelsRoutingModule
  ]
})
export class ChannelsModule { }
