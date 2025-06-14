import styles from "./Select.module.css";
import {ChangeEvent, memo, useMemo} from "react";

export interface SelectOption<T extends string> {
    value: T;
    text: string;
}

interface Props<T extends string> {
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    value?: T;
    onChange?: (value: T) => void;
    options?: SelectOption<T>[];
}

function SelectComponent<T extends string>(props: Props<T>) {
    const {
        disabled,
        label,
        placeholder,
        value,
        onChange,
        options
    } = props;

    const optionsList = useMemo(() => options?.map(({text, value}) => (
        <option key={value} className={styles.option} value={value}>{text}</option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={styles.selectContainer}>
            {
                label && <label htmlFor={label}>{`${label}>`}</label>
            }

            <select
                id={label}
                disabled={disabled}
                className={styles.select}
                value={value as string}
                onChange={onChangeHandler}
            >
                {placeholder && (
                    <option value="" disabled hidden>{placeholder}</option>
                )}
                {optionsList}
            </select>
        </div>
    );
}

export const Select = memo(
    SelectComponent
) as <T extends string>(props: Props<T>) => ReturnType<typeof SelectComponent>;