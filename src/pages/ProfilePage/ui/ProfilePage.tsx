import {EditableProfileCard} from "features/EditableProfileCard";
import {Page} from "shared/ui/Page";
import {useSelector} from "react-redux";
import {getUserId} from "entities/User";

const ProfilePage = () => {
    const id = useSelector(getUserId);

    return (
        <Page>
            <EditableProfileCard id={id}/>
        </Page>
    );
};

export default ProfilePage;