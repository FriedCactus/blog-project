import {memo, useCallback} from "react";
import {ArticleList, ArticleListView} from "entities/Article";
import {useSelector} from "react-redux";
import {articlesActions, articlesReducer, getArticles} from "../model/slice/articlesSlice";
import {DynamicModuleLoader} from "shared/lib/components";
import {useAppDispatch, useInitialEffect} from "shared/lib/hooks";
import {fetchArticles} from "../model/services/fetchArticles/fetchArticles";
import {getArticlesIsLoading} from "../model/selectors/getArticlesIsLoading/getArticlesIsLoading";
import {getArticlesError} from "../model/selectors/getArticlesError/getArticlesError";
import {getArticlesView} from "../model/selectors/getArticlesView/getArticlesView";
import {ArticlesViewSelector} from "features/ArticlesViewSelector";
import styles from './ArticlesPage.module.css';
import {PageWrapper} from "widgets/PageWrapper";
import {getArticlesPage} from "../model/selectors/getArticlesPage/getArticlesPage";
import {fetchNextArticlesPage} from "../model/services/fetchNextArticlesPage/fetchNextArticlesPage";

const reducers = {
    articles: articlesReducer
};

const ArticlesPage = memo(function ArticlesPage() {
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesView);
    const page = useSelector(getArticlesPage);

    useInitialEffect(() => {
        dispatch(articlesActions.initState());
        dispatch(fetchArticles(page));
    });

    const onViewChange = useCallback((view: ArticleListView) => {
        dispatch(articlesActions.setView(view));
    }, [dispatch]);

    const onPageEnd = () => {
        dispatch(fetchNextArticlesPage());
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <PageWrapper className={styles.ArticlesPage} onPageEnd={onPageEnd}>
                <ArticlesViewSelector view={view} onChange={onViewChange}/>
                <ArticleList
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                    error={error}
                />
            </PageWrapper>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;