import { usePostContext } from "../../hooks/usePostContext";

export default function Results() {
    const context = usePostContext();

    const { posts } = context;
    return <p>🚀 {posts.length} atomic posts found</p>;
}
