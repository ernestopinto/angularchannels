import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';


@NgModule({
    declarations: [ToolbarComponent],
    exports: [
        ToolbarComponent
    ],
    imports: [
        CommonModule,
        ToolbarRoutingModule
    ]
})
export class ToolbarModule { }
