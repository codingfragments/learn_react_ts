import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppComponent } from "./App";
import {container} from "./services/dependencies.config";
import { ILogService,  LogServiceImpl, LogServiceType } from "./services/LogService";

// Init base Services

// Init IOC

container.bind<ILogService>(LogServiceType).to(LogServiceImpl).inSingletonScope();

ReactDOM.render(
    <AppComponent name="Boilerplate" />,
    document.getElementById("application"));
