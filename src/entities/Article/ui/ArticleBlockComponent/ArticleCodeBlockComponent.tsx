import {ArticleCodeBlock} from "../../model/types/article";
import {Code} from "shared/ui/Code";

interface Props {
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({block}: Props) => {
    return (
        <div>
            <Code text={block.code}/>
        </div>
    );
};