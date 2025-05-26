import styles from "./Modal.module.css";
import {MouseEvent, PropsWithChildren, useCallback, useEffect, useState} from "react";
import {classNames} from "shared/lib/classNames";
import {Portal} from "shared/ui/Portal";

interface Props {
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: PropsWithChildren<Props>) => {
    const {
        children,
        isOpen = false,
        onClose,
        lazy = true
    } = props;

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const modalClassMods = {
        [styles.opened]: isOpen
    };

    const closeHandler = useCallback(() => {
        onClose?.();
    }, [onClose]);

    const onContentClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) return null;
    return (
        <Portal>
            <div className={classNames(
                styles.Modal,
                modalClassMods,
                []
            )}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={e => onContentClick(e)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};