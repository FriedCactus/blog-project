import styles from "./LoadingSpinner.module.css";
import {classNames} from "shared/lib/classNames";

interface Props {
    className?: string,
}

export const LoadingSpinner = ({className}: Props) => {
    return (
        <div className={classNames(styles.loadingSpinner, {}, [className])}>
            <div></div>
            <div></div>
        </div>
    );
};