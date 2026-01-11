import { useContext, useState } from "react";
import PostContext from "../../contexts/PostContext/PostContext";

export default function FormAddPost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const context = useContext(PostContext);

    if (context === null) {
        console.error("[FormAddPost] Err: 'context' is 'null'");
        return <></>;
    }

    const { onAddPost } = context;

    const handleSubmit = function (e: React.FormEvent) {
        e.preventDefault();
        if (!body || !title) return;
        onAddPost({ title, body });
        setTitle("");
        setBody("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post title" />
            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Post body" />
            <button>Add post</button>
        </form>
    );
}
