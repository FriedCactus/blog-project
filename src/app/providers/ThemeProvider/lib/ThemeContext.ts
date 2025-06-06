import {createContext} from "react";

export enum Theme {
    LIGHT = 'light_theme',
    DARK = 'dark_theme',
    GREEN = 'green_theme'
}

interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});