import * as React from "react";
import { ProviderContext } from './App';
import * as PropTypes from "prop-types";
import {SFC} from 'react';


interface ButtonProps {
    appender ?: String;
}
interface ButtonState {
    count:String
}
export class SimpleButton extends React.Component<ButtonProps,ButtonState > {
    static contextTypes = {
        backend: PropTypes.object
    }
    context: ProviderContext;

    componentWillMount() {
       // this.setState(this.context.backend.readCount);
       this.setState({count:this.context.backend.readString.getValue()});
       
    }
    btnClick = (e:React.MouseEvent<HTMLElement>) =>{
        console.log (this.context.backend);
        this.context.backend.count();
        this.setState({count:this.context.backend.readString.getValue()});
    } 

    render() {
        return (
            <button onClick={this.btnClick}>{this.state.count}</button>
        );
    }
}