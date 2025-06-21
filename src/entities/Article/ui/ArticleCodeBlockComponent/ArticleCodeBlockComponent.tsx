import {ArticleCodeBlock} from "../../model/types/article";
import {Code} from "shared/ui/Code";

interface Props {
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({block}: Props) => {
    return (
        <Code text={block.code}/>
    );
};