import DefaultLayout from "../layouts/Default/Default.layout";
import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm";
import { useParams } from "react-router-dom";

export default function PostEditView() {
  const params = useParams<{ id: string }>();
  usePageTitle("Edição de post");

  return (
    <DefaultLayout>
      <PostForm postId={Number(params.id)} />
    </DefaultLayout>
  );
}
