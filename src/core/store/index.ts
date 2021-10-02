import { userReducer } from './User.slice';
import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./Post.slice";

const store = configureStore({
    reducer: {
        post: postReducer,
        user: userReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch