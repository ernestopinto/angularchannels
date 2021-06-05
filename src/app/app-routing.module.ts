import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =
    [
      { path: 'channels', loadChildren: () => import('./components/channels/channels.module').then(m => m.ChannelsModule) },
      { path: 'componentTwo', loadChildren: () => import('./components/component-two/component-two.module').then(m => m.ComponentTwoModule) }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
