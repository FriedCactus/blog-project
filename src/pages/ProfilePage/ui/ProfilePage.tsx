import {DynamicModuleLoader, ReducersList} from "shared/lib/components";
import {profileReducer} from "entities/Profile";

const reducers: ReducersList = {
    profile: profileReducer
};

const ProfilePage = () => {
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                Страница профиля
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;