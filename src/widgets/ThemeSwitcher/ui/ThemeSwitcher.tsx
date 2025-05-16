import {Button} from "shared/ui/Button";
import {Theme, useTheme} from "app/providers/ThemeProvider";

import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";


export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button onClick={toggleTheme}>
            {
                theme === Theme.LIGHT ? <DarkThemeIcon/> : <LightThemeIcon/>
            }
        </Button>
    );
};