import {memo, useRef} from "react";
import {articlesReducer} from "../model/slice/articlesSlice";
import {DynamicModuleLoader} from "shared/lib/components";
import {useAppDispatch, useInitialEffect} from "shared/lib/hooks";
import styles from './ArticlesPage.module.css';
import {PageWrapper} from "widgets/PageWrapper";
import {initArticlesPage} from "../model/services/initArticlesPage/initArticlesPage";
import {ArticlesPageControls} from './ArticlesPageControls/ArticlesPageControls';
import {useSearchParams} from "react-router";
import {ArticlesPageList} from "./ArticlesPageList/ArticlesPageList";

const reducers = {
    articles: articlesReducer
};

const ArticlesPage = memo(function ArticlesPage() {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const scrollerRef = useRef<HTMLElement>(null);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper
                ref={scrollerRef}
                className={styles.ArticlesPage}
            >
                <ArticlesPageControls/>
                <ArticlesPageList scrollerRef={scrollerRef}/>
            </PageWrapper>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;