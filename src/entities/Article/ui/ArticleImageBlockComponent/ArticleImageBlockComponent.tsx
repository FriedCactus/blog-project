import {ArticleImageBlock} from "../../model/types/article";
import {Text} from 'shared/ui/Text';
import styles from './ArticleImageBlockComponent.module.css';

interface Props {
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({block}: Props) => (
    <div className={styles.ArticleImageBlockComponent}>
        <img className={styles.image} src={block.src} alt={block.title}/>
        {block.title && <Text size="s" title={block.title}/>}
    </div>
);