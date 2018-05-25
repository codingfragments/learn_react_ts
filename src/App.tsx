import * as React from "react";

interface IAppProps {
    name: string;
}

export class AppComponent extends React.Component<IAppProps, {}> {

    public render() {
        return(
            <h1> {this.props.name}</h1>
        );
    }
}
