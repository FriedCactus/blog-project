import styles from "./Select.module.css";
import {ChangeEvent, memo, useMemo} from "react";

export interface SelectOption {
    value: string;
    text: string;
}

interface Props {
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    options?: SelectOption[];
}


export const Select = memo(function Select(props: Props) {
    const {
        disabled,
        label,
        placeholder,
        value,
        onChange,
        options
    } = props;

    const optionsList = useMemo(() => options?.map(({text, value}) => (
        <option key={value} value={value}>{text}</option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
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
                value={value}
                onChange={onChangeHandler}
            >
                {placeholder && (
                    <option value="" disabled hidden>{placeholder}</option>
                )}
                {optionsList}
            </select>
        </div>
    );
});