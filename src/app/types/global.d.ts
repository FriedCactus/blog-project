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
declare const __API__: string;

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};