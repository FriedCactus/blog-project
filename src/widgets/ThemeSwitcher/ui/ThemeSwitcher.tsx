import {Button} from "shared/ui/Button";
import {Theme, useTheme} from "app/providers/ThemeProvider";

import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";
import {FC} from "react";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button className={className} onClick={toggleTheme}>
            {
                theme === Theme.LIGHT ? <DarkThemeIcon/> : <LightThemeIcon/>
            }
        </Button>
    );
};