import { RootState } from './../store/index';


export default function selectPaginatedPosts(state: RootState) {
    return state.post.pagainated?.content;
}