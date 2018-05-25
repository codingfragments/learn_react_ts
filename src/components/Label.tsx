import * as React from "react";
import { lazyInject } from "../services/dependencies.config";
import { ILogService, LogServiceType } from "../services/LogService";

interface ILabelProps {
    label: string;
    prefix: string;
}

export class CmpLabel extends React.Component<ILabelProps, {}> {
   @lazyInject(LogServiceType)
   private LOG: ILogService;

   public render() {
        return(
            <h1 onClick={ this.cbClick } >{this.props.prefix} {this.props.label}</h1>
        );
    }

    private cbClick = (e: React.MouseEvent<HTMLElement>) => {
       this.LOG.log("Logger test", e);
    }
}
