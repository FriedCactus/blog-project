import styles from "./PageLoader.module.css";
import {LoadingSpinner} from "shared/ui/LoadingSpinner";

export const PageLoader = () => {
    return (
        <div className={styles.PageLoader}>
            <LoadingSpinner/>
        </div>
    );
};