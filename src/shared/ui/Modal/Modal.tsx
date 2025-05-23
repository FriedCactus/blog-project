import styles from "./Modal.module.css";
import {FC, MouseEvent, PropsWithChildren, useCallback, useEffect} from "react";
import {classNames} from "shared/lib/classNames";
import {Portal} from "shared/ui/Portal";

interface Props {
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal: FC<PropsWithChildren<Props>> = (props) => {
    const {
        children,
        isOpen,
        onClose,
    } = props;

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