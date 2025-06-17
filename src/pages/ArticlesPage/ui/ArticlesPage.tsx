import {memo, useRef} from "react";
import {ArticleList} from "entities/Article";
import {useSelector} from "react-redux";
import {articlesReducer, getArticles} from "../model/slice/articlesSlice";
import {DynamicModuleLoader} from "shared/lib/components";
import {useAppDispatch, useInitialEffect} from "shared/lib/hooks";
import {getArticlesIsLoading} from "../model/selectors/getArticlesIsLoading/getArticlesIsLoading";
import {getArticlesError} from "../model/selectors/getArticlesError/getArticlesError";
import {getArticlesView} from "../model/selectors/getArticlesView/getArticlesView";
import styles from './ArticlesPage.module.css';
import {PageWrapper} from "widgets/PageWrapper";
import {fetchNextArticlesPage} from "../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {initArticlesPage} from "../model/services/initArticlesPage/initArticlesPage";
import {ArticlesPageControls} from './ArticlesPageControls/ArticlesPageControls';
import {useSearchParams} from "react-router";

const reducers = {
    articles: articlesReducer
};

const ArticlesPage = memo(function ArticlesPage() {
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onPageEnd = () => {
        if (!isLoading) {
            dispatch(fetchNextArticlesPage());
        }
    };

    const scrollerRef = useRef<HTMLElement>(null);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper
                ref={scrollerRef}
                className={styles.ArticlesPage}
                saveScrollPosition
            >
                <ArticlesPageControls/>
                <ArticleList
                    scrollerRef={scrollerRef}
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                    error={error}
                    onPageEnd={onPageEnd}
                />
            </PageWrapper>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;