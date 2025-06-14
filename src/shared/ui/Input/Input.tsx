import styles from "./Input.module.css";
import {classNames} from "shared/lib/classNames";
import {ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState} from "react";
import {Text, TextVariant} from 'shared/ui/Text';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo(function Input(props: Props) {
    const {
        className = '',
        value = '',
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const updateCaret = (position: number | null) => {
        setCaretPosition(position ?? 0);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        updateCaret(e.currentTarget.selectionEnd);
    };

    return (
        <div className={classNames(styles.InputContainer, {}, [className])}>
            {
                placeholder &&
                <Text
                    className={styles.placeholder}
                    variant={TextVariant.SECONDARY}
                >
                    {`${placeholder}>`}
                </Text>
            }

            <div className={styles.caretWrapper}>
                <input
                    ref={inputRef}
                    className={styles.input}
                    value={value}
                    onChange={onChangeHandler}
                    onSelect={e => updateCaret(e.currentTarget.selectionEnd)}
                    type={type}
                    {...otherProps}
                />
                <span
                    className={styles.caret}
                    style={{
                        left: `${caretPosition * 8.8}px`
                    }}
                />
            </div>
        </div>
    );
});