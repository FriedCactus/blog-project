import {memo, useCallback, useState} from "react";
import {ArticleList, ArticleListView} from "entities/Article";
import {useSelector} from "react-redux";
import {articlesReducer, getArticles} from "../model/slice/articlesSlice";
import {DynamicModuleLoader} from "shared/lib/components";
import {useAppDispatch, useInitialEffect} from "shared/lib/hooks";
import {fetchArticles} from "../model/services/fetchArticles/fetchArticles";
import {getArticlesIsLoading} from "../model/selectors/getArticlesIsLoading/getArticlesIsLoading";
import {getArticlesError} from "../model/selectors/getArticlesError/getArticlesError";
import {ArticlesViewSelector} from "features/ArticlesViewSelector";
import styles from './ArticlesPage.module.css';
import {LOCAL_STORAGE_ARTICLES_PAGE_VIEW} from "shared/const";

const reducers = {
    articles: articlesReducer
};

const ArticlesPage = memo(function ArticlesPage() {
    const [view, setView] = useState(ArticleListView.SMALL);

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);

    useInitialEffect(() => {
        dispatch(fetchArticles());

        const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_PAGE_VIEW) as ArticleListView;
        setView(view ?? ArticleListView.SMALL);
    });

    const onViewChange = useCallback((view: ArticleListView) => {
        setView(view);
        localStorage.setItem(LOCAL_STORAGE_ARTICLES_PAGE_VIEW, view);
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={styles.ArticlesPage}>
                <ArticlesViewSelector view={view} onChange={onViewChange}/>
                <ArticleList
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;