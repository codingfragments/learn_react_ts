import * as React from "react";
import { CmpLabel } from "./components/Label";

interface IAppProps {
    name: string;
}

export class AppComponent extends React.Component<IAppProps, {}> {
    public render() {
        return(
            <CmpLabel prefix="Hello" label={this.props.name} />
        );
    }
}
