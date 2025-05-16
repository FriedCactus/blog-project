declare module '*.module.css' {
    const classes: { [key: string]: string };
    export = classes;
}

declare module "*.svg" {
    import * as React from "react";

    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;

    export default ReactComponent;
}

declare const __IS_DEV__: boolean;