import {Button, ButtonSize, ButtonVariant} from "shared/ui/Button";
import styles from "./CollapseButton.module.css";
import {FC} from "react";

interface Props {
    onCollapse: () => void;
}

export const CollapseButton: FC<Props> = ({onCollapse}) => (
    <Button
        data-testid="sidebar-collapse"
        className={styles.toggleButton}
        variant={ButtonVariant.CLEAR}
        onClick={onCollapse}
        square
        size={ButtonSize.L}
    >
        <span className={styles.line}/>
        <span className={styles.line}/>
        <span className={styles.line}/>
    </Button>
);