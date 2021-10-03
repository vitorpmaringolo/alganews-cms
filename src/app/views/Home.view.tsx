import usePageTitle from "../../core/hooks/usePageTitle"
import usePosts from "../../core/hooks/usePosts"
import ErrorBoundary from "../components/ErrorBoundary"
import PostsList from "../features/PostsList"
import UserEarnings from "../features/UserEarnings"
import UserPerformance from "../features/UserPerformance"
import UserTopTags from "../features/UserTopTags"
import DefaultLayout from "../layouts/Default"

export default function Home() {
    usePageTitle('Home');
    const { paginatedPosts, loading, fetchPosts } = usePosts();

    return <DefaultLayout>
        <button onClick={() => {
            fetchPosts({ page: 1 })
        }}>
            disparar ação
        </button>
        {loading ? 'carregando' : 'finalizado'}
        <hr />
        {paginatedPosts?.map(post => <li>{post.title}</li>)}
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