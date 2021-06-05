import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ComponentCodeOperations} from "../../env/environment";
import {startWith} from "rxjs/operators";
import {ChannelsService} from "../../services/channels.service";

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  _channel$: BehaviorSubject<any> = new BehaviorSubject(null);

  getChannel$(){
    return this._channel$.asObservable().pipe(startWith({
      code: ComponentCodeOperations.none,
    }))
  }

  constructor(public channelService: ChannelsService) { }

  ngOnInit() {

  }

  changeColor(color: string){
    this._channel$.next({
      code: ComponentCodeOperations.ChangeColor,
      color: color
    });
  }

  changeColorInToolBar(color: string){
    this.channelService.pipeInChannel({
      code: ComponentCodeOperations.ChangeColor,
      payload: color
    })
  }

}
