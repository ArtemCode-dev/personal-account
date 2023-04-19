import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileSlice from "./slices/profile.slice";

let reducer = combineReducers({
    profile: profileSlice
})

let store = configureStore({
    reducer,
    devTools: true,
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof reducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export default store