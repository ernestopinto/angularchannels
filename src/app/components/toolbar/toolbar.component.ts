import { Component, OnInit } from '@angular/core';
import {ChannelsService} from "../../services/channels.service";
import {Observable} from "rxjs";
import {startWith} from "rxjs/operators";
import {ComponentCodeOperations} from "../../env/environment";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  
  _channels$: Observable<{code:number, payload?: any}>;

  constructor(public channels: ChannelsService) {
    this._channels$ = this.channels.getChannel$();
  }

  ngOnInit() {
  }

}
