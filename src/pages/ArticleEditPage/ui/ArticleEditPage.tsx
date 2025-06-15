import {memo} from "react";
import {Page} from "shared/ui/Page";
import {useParams} from "react-router";

const ArticleEditPage = memo(function ArticleEditPage() {
    const {id} = useParams<{ id?: string }>();

    return (
        <Page>
            {id && 'Редактирование статьи'}
            {!id && 'Создание статьи'}
        </Page>
    );
});

export default ArticleEditPage;