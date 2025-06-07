import {EditableProfileCard} from "features/EditableProfileCard";
import {useParams} from "react-router";
import {Page} from "shared/ui/Page";

const ViewProfilePage = () => {
    const {id} = useParams<{ id: string }>();

    return (
        <Page>
            <EditableProfileCard id={id} editable={false}/>
        </Page>
    );
};

export default ViewProfilePage;