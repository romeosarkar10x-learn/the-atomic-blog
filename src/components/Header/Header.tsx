import { Dispatch, SetStateAction, useContext } from "react";
import { OnClearPostsFnType } from "../../types/fn";
import { Post } from "../../types/post";
import Results from "../Results";
import SearchPosts from "../SearchPosts";
import PostContext from "../../contexts/PostContext/PostContext";

export default function Header() {
    const context = useContext(PostContext);

    if (context === null) {
        console.error("[Header] Err: 'context' is 'null'");
        return <></>;
    }

    const { onClearPosts } = context;

    return (
        <header>
            <h1>
                <span>⚛️</span>The Atomic Blog
            </h1>
            <div>
                <Results />
                <SearchPosts />
                <button onClick={onClearPosts}>Clear posts</button>
            </div>
        </header>
    );
}
