import {Decorator} from "@storybook/react";
import {Theme, ThemeProvider, useTheme} from "app/providers/ThemeProvider";
import {useEffect} from "react";

export const ThemeDecorator = (theme: Theme): Decorator => {
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




