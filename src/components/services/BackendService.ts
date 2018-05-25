
import { BehaviorSubject } from 'rxjs';


export class SimpleBackendService {
    private _count:number
    constructor() {
        this._count = 1;
        this.readString.next("NUM:1");

    }

    public count() {
        this._count++;
        this.readString.next("NUM:"+this._count);
    }

  

    public readString:BehaviorSubject<String> = new BehaviorSubject("INIT")
}