import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import {
    LoginUserRequest,
    LoginUserResponse,
    RegisterUserRequest,
    RegisterUserResponse,
} from "redux/models/authModels";
import { loginUser, registerUser } from "redux/services/auth.service";

export const registerUserThunk: AsyncThunk<RegisterUserResponse, RegisterUserRequest, {}> = createAsyncThunk<
    RegisterUserResponse,
    RegisterUserRequest
>("auth/reigster", async (request, thunkApi) => {
    return await registerUser(request);
});

export const loginUserThunk: AsyncThunk<LoginUserResponse, LoginUserRequest, {}> = createAsyncThunk<
    LoginUserResponse,
    LoginUserRequest
>("auth/login", async (request, thunkApi) => {
    return await loginUser(request);
});
