import {memo} from "react";
import {ArticleBlock, ArticleBlockType} from "../../model/types/article";
import {ArticleCodeBlockComponent} from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import {ArticleImageBlockComponent} from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import {ArticleTextBlockComponent} from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface Props {
    block: ArticleBlock;
}

export const ArticleBlockComponent = memo(function ArticleBlockComponent({block}: Props) {
    const {type} = block;

    switch (type) {
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent block={block}/>;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent block={block}/>;
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent block={block}/>;
        default:
            return null;
    }
});