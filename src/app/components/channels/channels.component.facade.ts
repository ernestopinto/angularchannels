import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ChannelModel} from "../../models/channels";

/** This could by a simple service */
@Injectable()
export class ChannelsComponentFacade {

    _channel$: BehaviorSubject<ChannelModel> = new BehaviorSubject({
        code:0
    });

    /** Set the current budget row id */
    setOnChannel(code: string | number | null, payload?: any) {
        this._channel$.next({
            code: code,
            payload: payload ? payload : null
        });
    }

    /** Exposes this channel */
    getChannel() {
       return this._channel$.asObservable();
    }

    constructor( ) {

    }
}
