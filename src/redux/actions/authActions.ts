import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterUserRequest, RegisterUserResponse } from "redux/models/authModels";
import { registerUser } from "redux/services/auth.service";

export const registerUserThunk: AsyncThunk<RegisterUserResponse, RegisterUserRequest, {}> = createAsyncThunk<
    RegisterUserResponse,
    RegisterUserRequest
>("auth", async (request, thunkApi) => {
    return await registerUser(request);
});
