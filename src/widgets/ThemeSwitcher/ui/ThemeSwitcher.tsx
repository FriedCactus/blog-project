import {Button} from "shared/ui/Button";
import {useTheme} from "app/providers/ThemeProvider";
import {ButtonVariant} from "shared/ui/Button/Button";
import {memo} from "react";
import {classNames} from "shared/lib/classNames";
import styles from './ThemeSwitcher.module.css';
import {Icon} from "shared/ui/Icon";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(function ThemeSwitcher({className}: ThemeSwitcherProps) {
    const {toggleTheme} = useTheme();

    return (
        <Button
            className={classNames(styles.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            variant={ButtonVariant.CLEAR}
            withPaddings={false}
        >
            <Icon variant="secondary" name="theme" size={60}/>
        </Button>
    );
});