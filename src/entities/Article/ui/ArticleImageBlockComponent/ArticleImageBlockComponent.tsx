import {ArticleImageBlock} from "../../model/types/article";
import {Text} from 'shared/ui/Text';
import styles from './ArticleImageBlockComponent.module.css';
import {VStack} from "shared/ui/Stack";

interface Props {
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({block}: Props) => (
    <VStack align="center" gap="s">
        <img className={styles.image} src={block.src} alt={block.title}/>
        {block.title && <Text size="s" title={block.title}/>}
    </VStack>
);