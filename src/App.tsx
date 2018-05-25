import * as React from "react";
import { CmpLabel } from "./components/Label";
import { lazyInject } from "./services/dependencies.config";
import { LogServiceType, ILogService } from "./services/LogService";

interface IAppProps {
    name: string;
}

export class AppComponent extends React.Component<IAppProps, {}> {
    @lazyInject(LogServiceType)
    private LOG: ILogService;

    public render() {
        this.LOG.log("TESTER");
        return(
            <CmpLabel prefix="Hello" label={this.props.name} />
        );
    }
}
