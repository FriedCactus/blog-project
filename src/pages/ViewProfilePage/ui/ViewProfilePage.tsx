import {EditableProfileCard} from "features/EditableProfileCard";
import {useParams} from "react-router";

const ViewProfilePage = () => {
    const {id} = useParams<{ id: string }>();

    return (
        <div>
            <EditableProfileCard id={id} editable={false}/>
        </div>
    );
};

export default ViewProfilePage;