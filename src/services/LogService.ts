import { injectable } from "inversify";

/* tslint:disable:no-console */

export interface ILogService {
    log(txt: string, payload?: any): void;
    logError(txt: string, payload?: any): void;
    logDebug(txt: string, payload?: any): void;
}

export const LogServiceType = Symbol.for("LogService");

@injectable()
export class LogServiceImpl implements ILogService {

    public log(txt: string, payload?: any): void {
        console.log(txt);
        if (payload) {
            console.log(payload);
        }
    }
    public logError(txt: string, payload?: any): void {
        console.log(txt);
        if (payload) {
            console.log(payload);
        }
    }
    public logDebug(txt: string, payload?: any): void {
        console.log(txt);
        if (payload) {
            console.log(payload);
        }
    }

}
