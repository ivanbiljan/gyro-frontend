import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { registerUserThunk } from "redux/actions/authActions";

export enum LoggedInStateEnum {
    Uninitialized = 0,
    Pending = 1,
    LoggedIn = 2,
    Unauthorized = 3,
    Expired = 4,
}

export interface AuthState {
    id: string;
    loggedInState: LoggedInStateEnum;
}

const initialState: AuthState = {
    id: "",
    loggedInState: LoggedInStateEnum.Uninitialized,
};

const slice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerUserThunk.rejected, () => {
            toast("Error");
        });

        builder.addCase(registerUserThunk.fulfilled, () => {
            toast("Success");
        });
    },
});

const { reducer } = slice;

export default reducer;
