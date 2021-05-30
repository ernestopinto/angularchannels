import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {delay, pluck, shareReplay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FakersService {

  constructor() { }

  public fakerService = {
    get() {
      const faker = {
        data: [
          {
            groupId: 0,
            groupName: 'Group 1',
            models: [
              {
                modelId: 0,
                modelName: 'Model 1',
                image: 'modelo1.JPG'
              },
              {
                modelId: 1,
                modelName: 'Model 2',
                image: 'modelo2.JPG'
              },
              {
                modelId: 2,
                modelName: 'Model 3',
                image: 'modelo3.JPG'
              },
              {
                modelId: 3,
                modelName: 'Model 5',
                image: 'modelo1.JPG'
              }
            ]
          },
          {
            groupId: 1,
            groupName: 'Group 2',
            models: [
              {
                modelId: 0,
                modelName: 'Model 1',
                image: 'modelo1.JPG'
              },
              {
                modelId: 1,
                modelName: 'Model 2',
                image: 'modelo2.JPG'
              }
            ]
          }
        ]
      } as any;
      return of(faker).pipe(
          tap(t => {
            console.log('getting faker groups and models...');
          }),
          pluck('data'),
          delay(1000),
          shareReplay(1)
      );
    }
  };
}
