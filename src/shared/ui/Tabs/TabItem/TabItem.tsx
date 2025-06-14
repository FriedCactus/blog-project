import {memo, useCallback} from "react";
import styles from './TabItem.module.css';
import {TabIem} from "../Tabs";
import {Button, ButtonVariant} from "shared/ui/Button";

interface TabItemProps {
    tab: TabIem;
    onClick?: (values: string) => void;
    selected?: boolean;
}

export const TabItem = memo(function TabItem(props: TabItemProps) {
    const {tab, onClick, selected} = props;

    const handleClick = useCallback((value: string) => () => {
        onClick?.(value);
    }, [onClick]);

    return (
        <Button
            className={styles.TabItem}
            variant={selected ? ButtonVariant.PRIMARY : ButtonVariant.OUTLINE}
            onClick={handleClick(tab.value)}
        >
            {tab.content}
        </Button>
    );
});