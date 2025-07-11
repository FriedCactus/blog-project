import {Theme, ThemeContext} from "../lib/ThemeContext";
import {PropsWithChildren, useEffect, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY} from "shared/const";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT;

interface Props {
    initialTheme?: Theme;
}

export const ThemeProvider = (props: PropsWithChildren<Props>) => {
    const {
        children,
        initialTheme
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

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