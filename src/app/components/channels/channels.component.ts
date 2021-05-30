import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  _channel$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  ngOnInit() {
  }

}
