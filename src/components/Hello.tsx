import * as React from "react";
import { ProviderContext } from './App';
import * as PropTypes from "prop-types";


export interface HelloProps { compiler: string; framework: string; }
interface HelloState {countString:String}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, HelloState> {
    static contextTypes = {
        backend: PropTypes.object
    }
   

    context: ProviderContext;

    updateState = {next: (val:String) => 
        this.setState({countString:val})
    };
    componentWillMount() {
        // this.setState(this.context.backend.readCount);
        this.setState({countString:this.context.backend.readString.getValue()});
        this.context.backend.readString.subscribe(this.updateState);
     }

     componentWillUnmount() {
         this.context.backend.readString.unsubscribe();
     }

    render() {
        return <h1>Hello2 from {this.props.compiler} and {this.props.framework} with Context : {this.state.countString} !</h1>;
    }
}