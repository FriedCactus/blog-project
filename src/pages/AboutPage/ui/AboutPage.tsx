import {useTranslation} from "react-i18next";
import {Counter} from "entities/Counter";
import {memo} from "react";

const AboutPage = memo(function AboutPage() {
    const {t} = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
            <Counter/>
        </div>
    );
});

export default AboutPage;