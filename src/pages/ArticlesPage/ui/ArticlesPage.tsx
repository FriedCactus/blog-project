import {memo} from "react";
import {ArticleList, articleMock} from "entities/Article";
import {Article} from "entities/Article/model/types/article";

const articles: Article[] = Array(10).fill(articleMock).map((article, index) => ({
    ...article,
    id: String(index),
}));

const ArticlesPage = memo(function ArticlesPage() {
    return (
        <ArticleList articles={articles}/>
    );
});

export default ArticlesPage;