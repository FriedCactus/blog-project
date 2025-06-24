import {Menu, MenuButton, MenuItem, MenuItems, MenuItemsProps} from '@headlessui/react';
import {memo, ReactNode} from 'react';
import styles from './Dropdown.module.css';
import {classNames} from "shared/lib/classNames";
import {RouterLink} from "../RouterLink";

export interface DropdownItem {
    content: string;
    onClick?: () => void;
    href?: string;
}

interface Props {
    items: DropdownItem[];
    trigger: ReactNode;
    anchor?: MenuItemsProps['anchor'];
}

export const Dropdown = memo(function Dropdown(props: Props) {
    const {
        trigger,
        items,
        anchor = 'bottom'
    } = props;

    return (
        <Menu>
            <MenuButton className={styles.btn}>
                {trigger}
            </MenuButton>

            <MenuItems
                className={styles.menuItems}
                anchor={anchor}
            >
                {
                    items.map((item) => {
                        const content = (
                            <button
                                className={classNames(styles.menuItem, {}, [styles.btn])}
                                onClick={item.onClick}
                            >
                                {item.content}
                            </button>
                        );

                        if (item.href) {
                            return (
                                <MenuItem
                                    key={item.content}
                                    as={RouterLink}
                                    to={item.href}
                                >
                                    {content}
                                </MenuItem>
                            );
                        }

                        return (
                            <MenuItem key={item.content}>
                                {content}
                            </MenuItem>
                        );
                    })
                }
            </MenuItems>
        </Menu>
    );
});