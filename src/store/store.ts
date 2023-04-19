import { configureStore, combineReducers } from "@reduxjs/toolkit";

let reducer = combineReducers({

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