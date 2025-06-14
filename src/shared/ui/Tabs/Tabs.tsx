import {memo, ReactNode, useCallback} from "react";
import {TabItem} from "./TabItem/TabItem";
import styles from './Tabs.module.css';

export interface TabIem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabIem[];
    values: string[];
    onSelect?: (values: string[]) => void;
}

// Добавить дженерик для значений
export const Tabs = memo(function Tabs(props: TabsProps) {
    const {tabs, values, onSelect} = props;

    const handleSelect = useCallback((value: string) => {
        if (!onSelect) return;

        const newValues = values.includes(value) ?
            values.filter(item => item !== value) :
            [...values, value];

        onSelect(newValues);
    }, [onSelect, values]);

    return (
        <div className={styles.Tabs}>
            {
                tabs.map(tab => (
                    <TabItem
                        key={tab.value}
                        tab={tab}
                        onClick={handleSelect}
                        selected={values.includes(tab.value)}
                    />
                ))
            }
        </div>
    );
});