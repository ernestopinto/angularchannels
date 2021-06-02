import { Component, OnInit } from '@angular/core';
import {ChannelsComponentFacade} from "./channels.component.facade";

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {


  constructor(_componentFacade: ChannelsComponentFacade) { }

  ngOnInit() {
  }

}
