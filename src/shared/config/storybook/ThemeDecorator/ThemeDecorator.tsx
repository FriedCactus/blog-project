import {ReactRenderer} from "@storybook/react";
import {Theme, ThemeProvider, useTheme} from "app/providers/ThemeProvider";
import {useEffect} from "react";
import {DecoratorFunction} from '@storybook/csf';

export const ThemeDecorator = (theme: Theme): DecoratorFunction<ReactRenderer, object> => {
    return function StoryComponent(Story) {
        const {setTheme} = useTheme();

        useEffect(() => {
            setTheme(theme);
        }, [setTheme]);

        return (
            <ThemeProvider initialTheme={theme}>
                <div id="app" className={`app ${theme}`}>
                    <Story/>
                </div>
            </ThemeProvider>
        );
    };
};




