import { useContext } from "react";
import PostContext from "../../contexts/PostContext/PostContext";

export default function List() {
    const context = useContext(PostContext);

    if (context === null) {
        console.error("[List] Err: 'context' is 'null'");
        return <></>;
    }

    const { posts } = context;

    return (
        <ul>
            {posts.map((post, i) => (
                <li key={i}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
}
