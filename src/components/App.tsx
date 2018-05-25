
import { Hello } from "./Hello";
import * as React from 'react';

import * as PropTypes from "prop-types";
import { SimpleButton } from "./SimpleButton";
import { SimpleBackendService } from './services/BackendService';

export interface AppProps { }


export interface ProviderContext {
    backend: SimpleBackendService;
}
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppProps, {}> {
   
    private _backend:SimpleBackendService;

    constructor(props:AppProps,ctx:any) {
        super(props,ctx);
        console.log("Constructor")
        
        this._backend = new SimpleBackendService();
       console.log( this._backend);

    }

    static childContextTypes = {
        backend: PropTypes.object
    }

    private act:String = "jj";

    getChildContext() :ProviderContext {
        console.log("getChildContext Executed on "+this);
        console.log(this);
        console.log( this._backend);

        return {
            backend: this._backend
        }
    }
    render() {
        return (
            <div>
                <Hello compiler="TypeScript" framework="React" />
                <hr/>
                <SimpleButton/>
            </div>
        );
       
    }
}