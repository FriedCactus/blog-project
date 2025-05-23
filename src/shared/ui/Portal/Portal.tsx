import {PropsWithChildren, useRef} from "react";
import {createPortal} from "react-dom";

export const Portal = (props: PropsWithChildren) => {
    const {
        children,
    } = props;
    const portalRoot = useRef<HTMLElement>(document.getElementById("portal") ?? document.body);

    return createPortal(children, portalRoot.current);
};