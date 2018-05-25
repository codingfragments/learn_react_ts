import * as React from "react";
import {lazyInject} from "../services/dependencies.config";
import {ILogService, LogServiceType} from "../services/LogService";

const initialState = {name: "Stefan"};

type State = Readonly<typeof initialState>;
type Props = Partial<{
    label: string;
    prefix: string;
}>;

export class CmpLabel extends React.Component<Props, State> {

    public readonly state: State = initialState;

    @lazyInject(LogServiceType)
    private LOG: ILogService;

    public render() {
        return (
            <>
                <h1 onClick={this.cbClick}>{this.props.prefix} {this.props.label} MM {this.state.name}</h1>
                <img src={require("../assets/icons/showman.png")}/>
            </>
        );
    }

    private cbClick = (e: React.MouseEvent<HTMLElement>) => {
        this.LOG.log("Logger test", e);
        const newState = {...this.state, ...{name: "Mike"}};
        this.setState(newState);
        // this.state.name = "MIKERL";
    }
}
