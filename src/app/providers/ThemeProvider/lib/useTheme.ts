import {useContext} from "react";
import {Theme, ThemeContext} from "./ThemeContext";
import {LOCAL_STORAGE_THEME_KEY} from "shared/const";

export const useTheme = () => {
    const {
        theme = Theme.LIGHT,
        setTheme = () => {
        }
    } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme;

        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            default:
                newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
        setTheme
    };
};