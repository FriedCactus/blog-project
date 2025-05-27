import {DynamicModuleLoader, ReducersList} from "shared/lib/components";
import {ProfileCard, profileReducer} from "entities/Profile";

const reducers: ReducersList = {
    profile: profileReducer
};

const ProfilePage = () => {
    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfileCard/>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;