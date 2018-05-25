import * as React from "react";
import {lazyInject} from "../services/dependencies.config";
import {ILogService, LogServiceType} from "../services/LogService";

interface ILabelProps {
    label: string;
    prefix: string;
}

class LabelState {
     public name: string = "";
}

export class CmpLabel extends React.Component<ILabelProps, LabelState> {
    public state: Readonly<LabelState>;

    @lazyInject(LogServiceType)
    private LOG: ILogService;

    public componentWillMount() {
        this.setState({name: "Stefan"});
    }

    public render() {
        return (
            <h1 onClick={this.cbClick}>{this.props.prefix} {this.props.label} MM {this.state.name}
                <img src={require("../assets/icons/showman.png")}/>
            </h1>
        );
    }

    private cbClick = (e: React.MouseEvent<HTMLElement>) => {
        this.LOG.log("Logger test", e);
        const newState = {...this.state, ...{name: "Mike"}};
        this.setState(newState);
        // this.state.name = "MIKERL";
    }
}
