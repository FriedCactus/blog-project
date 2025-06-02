import styles from './Code.module.css';
import {Button, ButtonVariant} from "shared/ui/Button";
import {Icon} from "shared/ui/Icon";

interface Props {
    text: string;
}

export const Code = ({text}: Props) => {
    const onCopy = () => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className={styles.Code}>
            <pre>
                <code>
                    {text}
                </code>
            </pre>

            <Button onClick={onCopy} className={styles.copyButton} variant={ButtonVariant.CLEAR}>
                <Icon variant="tertiary" name="copy"/>
            </Button>
        </div>
    );
};