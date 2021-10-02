import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import usePageTitle from "../../core/hooks/usePageTitle"
import selectPostsCounter from "../../core/selectors/selectPostsCounter"
import { increment } from "../../core/store/Post.slice"
import ErrorBoundary from "../components/ErrorBoundary"
import PostsList from "../features/PostsList"
import UserEarnings from "../features/UserEarnings"
import UserPerformance from "../features/UserPerformance"
import UserTopTags from "../features/UserTopTags"
import DefaultLayout from "../layouts/Default"

export default function Home() {
    usePageTitle('Home');
    const dispatch = useDispatch();
    const counter = useSelector(selectPostsCounter);

    useEffect(() => { }, [dispatch])

    return <DefaultLayout>
        <button onClick={() => {
            dispatch(increment());
        }}>
            disparar ação
        </button>
        {counter}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 32}}>
            <UserTopTags />
            <UserEarnings />
        </div>
        <UserPerformance />
        <ErrorBoundary component={'lista de posts'}>
            <PostsList />
        </ErrorBoundary>
    </DefaultLayout>
}