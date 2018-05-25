import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppComponent } from "./App";
import {container} from "./services/dependencies.config";
import { ILogService,  LogServiceImpl, LogServiceType } from "./services/LogService";

// Init base Services

container.bind<ILogService>(LogServiceType).to(LogServiceImpl);

ReactDOM.render(
    <AppComponent name="Boilerplate" />,
    document.getElementById("application"));
