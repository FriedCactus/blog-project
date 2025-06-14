import {memo} from "react";
import {TabIem, Tabs} from "shared/ui/Tabs";
import {ArticleType} from "entities/Article";

const tabs: TabIem[] = [
    {
        value: ArticleType.IT,
        content: 'IT'
    },
    {
        value: ArticleType.CRYPTO,
        content: 'Crypto'
    },
    {
        value: ArticleType.SCIENCE,
        content: 'Science'
    },
];

interface Props {
    values: string[];
    onSelect?: (value: string[]) => void;
}

export const ArticleCategoryTabs = memo(function ArticleCategoryTabs({values, onSelect}: Props) {
    return (
        <Tabs tabs={tabs} values={values} onSelect={onSelect}/>
    );
});