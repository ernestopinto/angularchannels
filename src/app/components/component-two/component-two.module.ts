import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentTwoRoutingModule } from './component-two-routing.module';
import { ComponentTwoComponent } from './component-two.component';


@NgModule({
  declarations: [ComponentTwoComponent],
  imports: [
    CommonModule,
    ComponentTwoRoutingModule
  ]
})
export class ComponentTwoModule { }
