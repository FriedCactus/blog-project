import {memo, useCallback} from "react";
import {ArticleListView} from "entities/Article";
import {Icon} from "shared/ui/Icon";
import {Button, ButtonVariant} from "shared/ui/Button";
import styles from './ArticlesViewSelector.module.css';
import {classNames} from "shared/lib/classNames";
import {HStack} from "shared/ui/Stack";

const views = [
    {
        view: ArticleListView.SMALL,
        icon: <Icon name="grid"/>
    },
    {
        view: ArticleListView.BIG,
        icon: <Icon name="burger"/>
    }
];

interface Props {
    view?: ArticleListView;
    onChange?: (view: ArticleListView) => void;
}

export const ArticlesViewSelector = memo(function ArticlesViewSelector(props: Props) {
    const {view, onChange} = props;

    const onChangeHandler = useCallback((view: ArticleListView) => () => {
        onChange?.(view);
    }, [onChange]);

    return (
        <HStack gap="m">
            {
                views.map((item) => (
                    <Button
                        key={item.view}
                        onClick={onChangeHandler(item.view)}
                        className={classNames('', {
                            [styles.active]: view === item.view
                        })}
                        withPaddings={false}
                        variant={ButtonVariant.CLEAR}
                    >

                        {item.icon}
                    </Button>
                ))
            }
        </HStack>
    );
});