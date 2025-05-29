import styles from "./Avatar.module.css";
import {classNames} from "shared/lib/classNames";
import {memo, useMemo} from "react";

interface Props {
    src?: string;
    size?: number;
    alt?: string;
    className?: string;
}

export const Avatar = memo(function Avatar(props: Props) {
    const {
        alt,
        src,
        className,
        size = 100
    } = props;

    const sizes = useMemo(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={sizes}
            className={classNames(styles.Avatar, {}, [className])}
        />
    );
});