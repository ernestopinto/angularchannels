import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'channels', loadChildren: () => import('./components/channels/channels.module').then(m => m.ChannelsModule) }, { path: 'acomponent', loadChildren: () => import('./components/acomponent/acomponent.module').then(m => m.AcomponentModule) }, { path: 'toolbar', loadChildren: () => import('./components/toolbar/toolbar.module').then(m => m.ToolbarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
