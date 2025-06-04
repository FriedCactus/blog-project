import styles from './AddCommentForm.module.css';
import {Input} from "shared/ui/Input";
import {Button, ButtonVariant} from "shared/ui/Button";
import {FormEvent, useCallback, useState} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {Text, TextVariant} from 'shared/ui/Text';
import {useTranslation} from "react-i18next";

interface Props {
    onSubmit: (commentText: string) => Promise<unknown> | void;
    error?: string;
}

const AddCommentForm = ({onSubmit, error}: Props) => {
    const {t} = useTranslation('comment');

    const [inputValue, setInputValue] = useState('');
    const authData = useSelector(getUserAuthData);
    const isCommentingDisabled = !authData;

    const onChange = useCallback((value: string) => {
        setInputValue(value);
    }, []);

    const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await onSubmit?.(inputValue);
        setInputValue('');
    };

    return (
        <div className={styles.AddCommentForm}>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <Input
                    className={styles.input}
                    disabled={isCommentingDisabled}
                    placeholder={t("Введите текст комментария")}
                    value={inputValue}
                    onChange={onChange}
                />

                <Button
                    type="submit"
                    variant={ButtonVariant.OUTLINE}
                    disabled={isCommentingDisabled}
                >
                    {t("Отправить")}
                </Button>
            </form>

            {
                isCommentingDisabled && (
                    <Text variant={TextVariant.ERROR}>
                        {t("Авторизуйтесь, чтобы оставить комментарий")}
                    </Text>
                )
            }

            {
                error && (
                    <Text variant={TextVariant.ERROR}>
                        {error}
                    </Text>
                )
            }
        </div>
    );
};

export default AddCommentForm;