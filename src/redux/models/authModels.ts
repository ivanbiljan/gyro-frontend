export interface RegisterUserRequest {
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface RegisterUserResponse {}

export interface LoginUserRequest {
    username: string;
    password: string;
}

export interface LoginUserResponse {}
