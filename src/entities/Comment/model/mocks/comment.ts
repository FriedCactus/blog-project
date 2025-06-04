import {Comment} from "../types/comment";
import AvatarImage from 'shared/assets/test/avatar.jpg';

const userMock = {
    id: "1",
    username: "username",
    password: "password",
    avatar: AvatarImage,
};

export const commentListMock: Comment[] = [
    {
        id: "1",
        userId: "1",
        text: "Комментарий",
        user: userMock,
    },
    {
        id: "2",
        userId: "1",
        text: "Ещё комментарий",
        user: userMock,
    },
];