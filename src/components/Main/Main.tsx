import { OnAddPostFnType } from "../../types/fn";
import { Post } from "../../types/post";
import FormAddPost from "../FormAddPost";
import Posts from "../Posts";

export default function Main({ posts, onAddPost }: { posts: Post[]; onAddPost: OnAddPostFnType }) {
    return (
        <main>
            <FormAddPost onAddPost={onAddPost} />
            <Posts posts={posts} />
        </main>
    );
}
