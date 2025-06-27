import {ArticleList} from "entities/Article";
import {useSelector} from "react-redux";
import {getArticlesError} from "../../model/selectors/getArticlesError/getArticlesError";
import {getArticlesView} from "../../model/selectors/getArticlesView/getArticlesView";
import {getArticles} from "../../model/slice/articlesSlice";
import {fetchNextArticlesPage} from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {useAppDispatch} from "shared/lib/hooks";
import {getArticlesIsLoading} from "../../model/selectors/getArticlesIsLoading/getArticlesIsLoading";
import {RefObject} from "react";

interface Props {
    scrollerRef: RefObject<HTMLElement | null>;
}

export const ArticlesPageList = ({scrollerRef}: Props) => {

    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesView);
    const isLoading = useSelector(getArticlesIsLoading);

    const onPageEnd = () => {
        if (!isLoading) {
            dispatch(fetchNextArticlesPage());
        }
    };

    return (
        <ArticleList
            scrollerRef={scrollerRef}
            view={view}
            articles={articles}
            isLoading={isLoading}
            error={error}
            onPageEnd={onPageEnd}
        />
    );
};