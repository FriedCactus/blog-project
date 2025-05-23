import {Decorator} from "@storybook/react";
import {Theme, ThemeProvider} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme): Decorator => {
    return function StoryComponent(Story) {
        return (
            <ThemeProvider initialTheme={theme}>
                <div id="app" className={`app ${theme}`}>
                    <Story/>
                </div>
            </ThemeProvider>
        );
    };
};




