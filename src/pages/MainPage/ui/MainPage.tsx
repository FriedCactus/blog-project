import {useTranslation} from 'react-i18next';
import {Counter} from "entities/Counter";
import {memo} from "react";

const MainPage = memo(function MainPage() {
    const {t} = useTranslation('main');

    return (
        <div>
            {t('Главная')}
            <Counter/>
        </div>
    );
});

export default MainPage;