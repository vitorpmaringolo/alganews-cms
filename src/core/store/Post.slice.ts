import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostService } from "vitorpmaringolo-sdk";

interface PostSliceState {
    pagainated?: Post.Paginated;
}

const initialState: PostSliceState = {
    pagainated: {
        page: 0,
        size: 0,
        totalElements: 0,
        totalPages: 1,
        content: []
    }
}

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async function(query: Post.Query) {
        const posts = await PostService.getAllPosts(query)
        return posts;
    }
)

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<Post.Summary>) {
            state.pagainated?.content?.push(action.payload);
        }
    }
})

export const postReducer = postSlice.reducer;
export const { addPost } = postSlice.actions;