import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {startWith} from "rxjs/operators";
import {ComponentCodeOperations} from "../env/environment";

// this is de Service version of the channels pattern

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  _channel$: BehaviorSubject<{code: number, payload?: any}> = new BehaviorSubject({
    code: ComponentCodeOperations.ChangeColor,
    payload: 'blue'
  });

  getChannel$(){
    return this._channel$.asObservable().pipe(startWith({
      code: ComponentCodeOperations.none,
      payload: 'blue'
    }))
  }

  pipeInChannel(operation: {code:number, payload?: any}){
    this._channel$.next(operation);
  }

  constructor() { }
}
