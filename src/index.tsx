import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppComponent } from "./App";

ReactDOM.render(
    <AppComponent name="Boilerplate-2" />,
    document.getElementById("application"),
);

/* tslint:disable:object-literal-sort-keys */

const cssImports =  {
    icons: require("../node_modules/@coreui/icons/css/coreui-icons.css"),
    flag: require("../node_modules/flag-icon-css/css/flag-icon.css"),
    fontAwesome: require("../node_modules/font-awesome/css/font-awesome.css"),
    simpleLine: require("../node_modules/simple-line-icons/css/simple-line-icons.css"),
    app: require("./scss/style.scss"),
};
