import AboutIcon from '../../assets/icons/about-icon.svg';
import ArticlesIcon from '../../assets/icons/articles-icon.svg';
import CalendarIcon from '../../assets/icons/calendar-icon.svg';
import CopyIcon from '../../assets/icons/copy-icon.svg';
import EyeIcon from '../../assets/icons/eye-icon.svg';
import MainIcon from '../../assets/icons/main-icon.svg';
import ProfileIcon from '../../assets/icons/profile-icon.svg';
import ThemeIcon from '../../assets/icons/theme-icon.svg';

import styles from './Icon.module.css';

type IconVariant = 'primary' | 'secondary' | 'tertiary';

const Icons = {
    about: AboutIcon,
    articles: ArticlesIcon,
    calendar: CalendarIcon,
    copy: CopyIcon,
    eye: EyeIcon,
    main: MainIcon,
    profile: ProfileIcon,
    theme: ThemeIcon,
} as const;

type IconName = keyof typeof Icons

interface Props {
    name: IconName;
    variant?: IconVariant;
    size?: number | string;
}

export const Icon = (props: Props) => {
    const {
        name,
        variant = 'primary',
        size = 20
    } = props;

    const RenderIcon = Icons[name];

    if (!RenderIcon) return null;
    return (
        <RenderIcon
            className={styles[variant]}
            style={{
                width: size,
                height: size,
            }}
        />
    );
};