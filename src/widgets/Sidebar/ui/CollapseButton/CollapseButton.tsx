import {Button, ButtonSize, ButtonVariant} from "shared/ui/Button";
import styles from "./CollapseButton.module.css";
import {memo} from "react";

interface Props {
    onCollapse: () => void;
}

export const CollapseButton = memo(function CollapseButton({onCollapse}: Props) {
    return (
        <Button
            data-testid="sidebar-collapse"
            className={styles.toggleButton}
            variant={ButtonVariant.CLEAR}
            onClick={onCollapse}
            square
            size={ButtonSize.L}
            withPaddings={false}
        >
            <span className={styles.line}/>
            <span className={styles.line}/>
            <span className={styles.line}/>
        </Button>
    );
});