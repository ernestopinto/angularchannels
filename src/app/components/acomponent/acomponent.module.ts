import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcomponentRoutingModule } from './acomponent-routing.module';
import { AcomponentComponent } from './acomponent.component';


@NgModule({
  declarations: [AcomponentComponent],
  imports: [
    CommonModule,
    AcomponentRoutingModule
  ]
})
export class AcomponentModule { }
