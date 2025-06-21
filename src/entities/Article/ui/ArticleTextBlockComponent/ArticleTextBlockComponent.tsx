import {ArticleTextBlock} from "../../model/types/article";
import styles from './ArticleTextBlockComponent.module.css';
import {Text, TextVariant} from 'shared/ui/Text';
import {VStack} from "shared/ui/Stack";

interface Props {
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = ({block}: Props) => {
    return (
        <VStack gap="xl" className={styles.ArticleTextBlockComponent}>
            {
                block.paragraphs.map((paragraph, index) => (
                    <Text variant={TextVariant.SECONDARY} key={index}>
                        {paragraph}
                    </Text>
                ))
            }
        </VStack>
    );
};