import { Dispatch, SetStateAction } from "react";
import { OnClearPostsFnType } from "../../types/fn";
import { Post } from "../../types/post";
import Results from "../Results";
import SearchPosts from "../SearchPosts";

export default function Header({
    posts,
    onClearPosts,
    searchQuery,
    setSearchQuery,
}: {
    posts: Post[];
    onClearPosts: OnClearPostsFnType;
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
}) {
    return (
        <header>
            <h1>
                <span>⚛️</span>The Atomic Blog
            </h1>
            <div>
                <Results posts={posts} />
                <SearchPosts searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <button onClick={onClearPosts}>Clear posts</button>
            </div>
        </header>
    );
}
