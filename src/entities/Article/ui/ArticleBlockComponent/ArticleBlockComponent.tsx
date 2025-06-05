import {memo} from "react";
import {ArticleBlock, ArticalBlockType} from "../../model/types/article";
import {ArticleCodeBlockComponent} from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import {ArticleImageBlockComponent} from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import {ArticleTextBlockComponent} from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface Props {
    block: ArticleBlock;
}

export const ArticleBlockComponent = memo(function ArticleBlockComponent({block}: Props) {
    const {type} = block;

    switch (type) {
        case ArticalBlockType.TEXT:
            return <ArticleTextBlockComponent block={block}/>;
        case ArticalBlockType.IMAGE:
            return <ArticleImageBlockComponent block={block}/>;
        case ArticalBlockType.CODE:
            return <ArticleCodeBlockComponent block={block}/>;
        default:
            return null;
    }
});