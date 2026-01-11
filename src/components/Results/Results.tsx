import { Post } from "../../types/post";

export default function Results({ posts }: { posts: Post[] }) {
    return <p>🚀 {posts.length} atomic posts found</p>;
}
