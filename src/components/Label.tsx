import * as React from 'react'

interface LabelProps {
    label:String,
    prefix:String
}

export class CmpLabel extends React.Component<LabelProps,{}> {
    render() {
        return(
            <h1>{this.props.prefix} {this.props.label}</h1>
        );
    }
}
