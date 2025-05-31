import styles from './Skeleton.module.css';
import {classNames} from "shared/lib/classNames";

interface Props {
    width?: string;
    height?: string;
    borderRadius?: string;
    className?: string;
}

export const Skeleton = (props: Props) => {
    const {
        width = '100%',
        height = '100%',
        borderRadius = '4px',
        className
    } = props;

    return (
        <div
            style={{
                width,
                height,
                borderRadius
            }}
            className={classNames(styles.Skeleton, {}, [className])}
        />
    );
};