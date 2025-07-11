import type {User, UserSchema} from "./model/types/user";
import {userReducer, userActions} from "./model/slice/userSlice";
import {getUserAuthData} from "./model/selectors/getUserAuthData/getUserAuthData";
import {getUserInited} from "./model/selectors/getUserInited/getUserInited";
import {userMock} from "./model/mocks/user";
import {getUserId} from "./model/selectors/getUserId/getUserId";

export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData,
    getUserInited,
    getUserId,
    userMock
};