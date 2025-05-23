export interface User {
    is: string;
    username: string;
}

export interface UserSchema {
    authData?: User;
}