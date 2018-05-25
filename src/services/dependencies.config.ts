import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";

import "reflect-metadata";

const container: Container = new Container();

const {
    lazyInject,
    lazyInjectNamed,
    lazyInjectTagged,
    lazyMultiInject,
} = getDecorators(container, false);

export {
    container,
    lazyInject,
    lazyInjectNamed,
    lazyInjectTagged,
    lazyMultiInject,
};
