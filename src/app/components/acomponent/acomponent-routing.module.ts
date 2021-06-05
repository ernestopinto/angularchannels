import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcomponentComponent } from './acomponent.component';

const routes: Routes = [{ path: '', component: AcomponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcomponentRoutingModule { }
