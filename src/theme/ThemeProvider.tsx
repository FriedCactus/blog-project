import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {PropsWithChildren, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT;

export const ThemeProvider = ({children}: PropsWithChildren) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const themeProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext value={themeProps}>
            {children}
        </ThemeContext>
    );
};