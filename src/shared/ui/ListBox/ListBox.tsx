import {
    Field,
    Listbox as HListBox,
    Label,
    ListboxButton,
    ListboxOption,
    ListboxOptions
} from '@headlessui/react';
import {Fragment, memo, ReactNode, useEffect, useState} from 'react';
import {HStack} from "../Stack/HStack/HStack";
import styles from './ListBox.module.css';
import {classNames} from "shared/lib/classNames";

type OptionsPosition = 'top' | 'bottom';

export interface ListItem {
    value: string;
    content: ReactNode;
}

export interface ListBoxProps {
    items: ListItem[],
    value?: string;
    onSelect: (value: string) => void;
    label?: string;
    disabled?: boolean;
    optionsPosition?: OptionsPosition;
    placeholder?: string;
}

export const ListBox = memo(function ListBox(props: ListBoxProps) {
    const {
        items,
        value,
        onSelect,
        label,
        disabled,
        optionsPosition = 'bottom',
        placeholder
    } = props;
    const [activeItem, setActiveItem] = useState<ListItem>();

    useEffect(() => {
        const selectedItem = items.find(item => item.value === value);
        setActiveItem(selectedItem);
    }, [items]);

    const handleSelect = (value: string) => {
        const selectedItem = items.find(item => item.value === value);
        setActiveItem(selectedItem);

        onSelect(value);
    };

    return (
        <Field as={Fragment}>
            <HStack gap="m" align="center">
                {
                    label && <Label>{`${label}>`}</Label>
                }
                <HListBox
                    as="div"
                    className={styles.listBox}
                    value={value}
                    onChange={handleSelect}
                >
                    <ListboxButton
                        className={styles.listBoxButton}
                        disabled={disabled}
                    >
                        {activeItem?.content || placeholder}
                    </ListboxButton>

                    <ListboxOptions
                        className={classNames(styles.listBoxOptions, {}, [styles[optionsPosition]])}
                    >
                        {items.map(({value, content}) => (
                            <ListboxOption
                                as={Fragment}
                                key={value}
                                value={value}
                            >
                                {({selected}) => (
                                    <div
                                        className={classNames(styles.listBoxItem, {
                                            [styles.selected]: selected
                                        })}
                                    >
                                        {content}
                                    </div>
                                )}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </HListBox>
            </HStack>
        </Field>
    );
});