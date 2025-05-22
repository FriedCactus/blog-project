import {Button} from "shared/ui/Button";
import {Theme, useTheme} from "app/providers/ThemeProvider";

import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";
import {FC} from "react";
import {ButtonVariant} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button className={className} onClick={toggleTheme} variant={ButtonVariant.CLEAR}>
            {
                theme === Theme.LIGHT ? <LightThemeIcon/> : <DarkThemeIcon/>
            }
        </Button>
    );
};