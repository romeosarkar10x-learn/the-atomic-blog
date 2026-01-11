import { Post } from "../../types/post";
import List from "../List";

export default function Posts({ posts }: { posts: Post[] }) {
    return (
        <section>
            <List posts={posts} />
        </section>
    );
}
