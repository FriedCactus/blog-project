import {FC, PropsWithChildren, useEffect, useRef} from "react";
import {createPortal} from "react-dom";

interface Props {
    element?: HTMLElement;
}

export const Portal: FC<PropsWithChildren<Props>> = (props) => {
    const portalRoot = useRef<HTMLElement>(document.body);

    useEffect(() => {
        const portalElement = document.getElementById("portal");

        if (portalElement) {
            portalRoot.current = portalElement;
        }
    }, []);

    const {
        children,
        element = portalRoot.current
    } = props;

    return createPortal(children, element);
};