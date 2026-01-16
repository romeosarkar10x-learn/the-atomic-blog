import { usePostContext } from "../../hooks/usePostContext";

export default function List() {
    const context = usePostContext();

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
