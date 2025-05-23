import {Button} from "shared/ui/Button";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";
import {ButtonVariant} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            className={className}
            onClick={toggleTheme}
            variant={ButtonVariant.CLEAR}
            withPaddings={false}
        >
            {
                theme === Theme.LIGHT ? <LightThemeIcon/> : <DarkThemeIcon/>
            }
        </Button>
    );
};