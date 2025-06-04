import {ArticleComment} from "pages/DetailedArticlePage/model/types/articleComment";
import {userMock} from "entities/User";

export const articleCommentEntitiesMock: Record<string, ArticleComment> = {
    "1": {
        id: "1",
        articleId: "1",
        userId: "1",
        text: "Комментарий",
        user: userMock,

    },
    "2": {
        id: "2",
        articleId: "1",
        userId: "1",
        text: "Ещё комментарий",
        user: userMock,
    }
};