import {Button, ButtonSize, ButtonVariant} from "shared/ui/Button";
import styles from "./CollapseButton.module.css";

interface Props {
    onCollapse: () => void;
}

export const CollapseButton = ({onCollapse}: Props) => (
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