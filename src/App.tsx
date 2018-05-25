import * as React from 'react'
import { CmpLabel } from './components/Label';

interface AppProps {
    name:String
}

export class AppComponent extends React.Component<AppProps,{}> {
    render() {
        return(
            <CmpLabel prefix="Hello" label={this.props.name} />
        );
    }
}

