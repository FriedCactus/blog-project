import {Comment} from "../types/comment";

const userMock = {
    id: "1",
    username: "username",
    password: "password",
    avatar: '',
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