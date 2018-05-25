import * as React from 'react'

interface AppProps {
    name:String
}

export class AppComponent extends React.Component<AppProps,{}> {
    render() {
        return(
            <h1>{this.props.name}</h1>
        );
    }
}

