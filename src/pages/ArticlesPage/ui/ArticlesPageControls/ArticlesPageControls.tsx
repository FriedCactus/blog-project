import {memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {useAppDispatch, useDebounceCallback} from "shared/lib/hooks";
import {Input} from "shared/ui/Input";
import {ArticlesViewSelector} from "features/ArticlesViewSelector";
import {ArticleListView, ArticleSortField, ArticleType} from "entities/Article";
import {getArticlesView} from "../../model/selectors/getArticlesView/getArticlesView";
import {articlesActions} from "../../model/slice/articlesSlice";
import styles from './ArticlesPageControls.module.css';
import {useTranslation} from "react-i18next";
import {SortOrder} from "shared/types";
import {ArticlesSortSelector} from "features/ArticlesSortSelector";
import {getSortOrder} from "../../model/selectors/getSortOrder/getSortOrder";
import {getSortField} from "../../model/selectors/getSortField/getSortField";
import {getSearchValue} from "../../model/selectors/getSearchValue/getSearchValue";
import {getSelectedCategories} from "../../model/selectors/getSelectedCategories/getSelectedCategories";
import {fetchArticles} from "../../model/services/fetchArticles/fetchArticles";
import {ArticleCategoryTabs} from "features/ArticleCategoryTabs";

export const ArticlesPageControls = memo(function ArticlesPageControls() {
    const {t} = useTranslation('articles');
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesView);
    const sortOrder = useSelector(getSortOrder);
    const sortField = useSelector(getSortField);
    const searchValue = useSelector(getSearchValue);
    const selectedCategories = useSelector(getSelectedCategories);

    const fetchArticlesData = () => {
        dispatch(articlesActions.setPage(1));
        dispatch(fetchArticles({replace: true}));
    };

    const debouncedFetchArticlesData = useDebounceCallback(fetchArticlesData, 700);

    const onViewChange = useCallback((view: ArticleListView) => {
        dispatch(articlesActions.setView(view));
    }, [dispatch]);

    const onSortFieldChange = useCallback((value: ArticleSortField) => {
        dispatch(articlesActions.setSortField(value));
        debouncedFetchArticlesData();
    }, [dispatch, debouncedFetchArticlesData]);

    const onSortOrderChange = useCallback((value: SortOrder) => {
        dispatch(articlesActions.setSortOrder(value));
        debouncedFetchArticlesData();
    }, [dispatch, debouncedFetchArticlesData]);

    const onSearchChange = useCallback((value: string) => {
        dispatch(articlesActions.setSearchValue(value));
        debouncedFetchArticlesData();
    }, [dispatch, debouncedFetchArticlesData]);

    const onCategorySelect = useCallback((categories: string[]) => {
        dispatch(articlesActions.setSelectedCategories(categories as ArticleType[]));
        debouncedFetchArticlesData();
    }, [debouncedFetchArticlesData, dispatch]);

    return (
        <div className={styles.controls}>
            <div className={styles.topRow}>
                <ArticlesSortSelector
                    sortOrder={sortOrder}
                    sortField={sortField}
                    onSortFieldChange={onSortFieldChange}
                    onSortOrderChange={onSortOrderChange}
                />

                <ArticlesViewSelector view={view} onChange={onViewChange}/>
            </div>

            <Input placeholder={t('Поиск')} value={searchValue} onChange={onSearchChange}/>

            <ArticleCategoryTabs values={selectedCategories} onSelect={onCategorySelect}/>
        </div>
    );
});