import {Button} from "shared/ui/Button";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

// Компонент для теста ErrorBoundary
export const BugButton = () => {
    const {t} = useTranslation();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    const onThrowError = () => {
        setError(true);
    };

    return (
        <Button onClick={onThrowError}>
            {t('Выбросить ошибку')}
        </Button>
    );
};