import {configureStore} from "@reduxjs/toolkit";
import { appReducer } from "./reducer";


const store = configureStore({
    reducer: {
        appReducer: appReducer
    },
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export default store