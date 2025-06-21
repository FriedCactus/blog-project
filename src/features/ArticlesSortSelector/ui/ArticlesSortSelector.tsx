import {Select, SelectOption} from "shared/ui/Select";
import {ArticleSortField} from "entities/Article";
import {SortOrder} from "shared/types";
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {HStack} from "shared/ui/Stack";

interface Props {
    sortField: ArticleSortField;
    sortOrder: SortOrder;
    onSortFieldChange?: (value: ArticleSortField) => void;
    onSortOrderChange?: (value: SortOrder) => void;
}

export const ArticlesSortSelector = (props: Props) => {
    const {
        sortField,
        sortOrder,
        onSortFieldChange,
        onSortOrderChange
    } = props;
    const {t} = useTranslation('articles');

    const sortFieldOptions: SelectOption<ArticleSortField>[] = useMemo(() => (
        [
            {
                value: ArticleSortField.TITLE,
                text: t('По названию')
            },
            {
                value: ArticleSortField.VIEWS,
                text: t('По просмотрам')
            },
            {
                value: ArticleSortField.CREATED_AT,
                text: t('По дате')
            },
        ]
    ), [t]);

    const sortOrderOptions: SelectOption<SortOrder>[] = useMemo(() => (
        [
            {
                value: 'asc',
                text: t('По увеличению')
            },
            {
                value: 'desc',
                text: t('По уменьшению')
            },
        ]
    ), [t]);

    return (
        <HStack gap="m">
            <Select
                value={sortField}
                options={sortFieldOptions}
                onChange={onSortFieldChange}
                placeholder={t('Сортировать по')}
            />
            <Select
                value={sortOrder}
                options={sortOrderOptions}
                onChange={onSortOrderChange}
                placeholder={t('Порядок')}
            />
        </HStack>
    );
};