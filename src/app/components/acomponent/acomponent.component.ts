import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-acomponent',
  templateUrl: './acomponent.component.html',
  styleUrls: ['./acomponent.component.css']
})
export class AcomponentComponent implements OnInit {

  @Input()
  channel$: Observable<{
    code: number,
    color: string
  }>;

  constructor() { }

  ngOnInit() {
  }

}
