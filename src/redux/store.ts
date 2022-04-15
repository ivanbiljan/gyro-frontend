import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import modalReducer from "./reducers/modalReducer";

export const store = configureStore({
    reducer: combineReducers({
        modal: modalReducer,
    }),
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().prepend(rtkQueryErrorLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
