import {Decorator} from "@storybook/react";
import {Theme} from "app/providers/ThemeProvider";
import styles from './ThemeDecorator.module.css';
import {classNames} from "shared/lib/classNames";

export const ThemeDecorator = (theme: Theme): Decorator => {
    return function StoryComponent(Story) {
        return <div
            className={
                classNames(
                    'app page-wrapper',
                    {},
                    [theme, styles.ThemeDecorator]
                )}
        >
            <Story/>
        </div>;
    };
};




