import {useTranslation} from "react-i18next";
import {Counter} from "entities/Counter";
import {memo} from "react";
import {Page} from "shared/ui/Page";

const AboutPage = memo(function AboutPage() {
    const {t} = useTranslation('about');

    return (
        <Page>
            {t('О сайте')}
            <Counter/>
        </Page>
    );
});

export default AboutPage;