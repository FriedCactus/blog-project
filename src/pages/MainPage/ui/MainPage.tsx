import {useTranslation} from 'react-i18next';
import {Counter} from "entities/Counter";
import {memo} from "react";
import {Page} from "shared/ui/Page";

const MainPage = memo(function MainPage() {
    const {t} = useTranslation('main');

    return (
        <Page>
            {t('Главная')}
            <Counter/>
        </Page>
    );
});

export default MainPage;