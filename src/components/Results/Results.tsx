import { useContext } from "react";
import PostContext from "../../contexts/PostContext/PostContext";

export default function Results() {
    const context = useContext(PostContext);

    if (context === null) {
        console.error("[Results] Error: 'context' is 'null'");
        return <></>;
    }

    const { posts } = context;
    return <p>🚀 {posts.length} atomic posts found</p>;
}
