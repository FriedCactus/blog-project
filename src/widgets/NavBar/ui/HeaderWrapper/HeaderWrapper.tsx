import {PropsWithChildren} from "react";
import styles from "./HeaderWrapper.module.css";
import {HStack} from "shared/ui/Stack";


export const HeaderWrapper = ({children}: PropsWithChildren) => {
    return (
        <header className={styles.HeaderWrapper}>
            <HStack justify="end" align="center" gap="xl" hMax>
                {children}
            </HStack>
        </header>
    );
};