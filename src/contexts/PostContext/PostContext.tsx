import { createContext, Dispatch, SetStateAction } from "react";
import { Post } from "../../types/post";
import { OnClearPostsFnType } from "../../types/fn";

type PostContextValueType = {
    posts: Post[];
    onClearPosts: OnClearPostsFnType;
    onAddPost: (post: Post) => void;
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
};

/* Step 1: Create a new context */
const PostContext = createContext<PostContextValueType | null>(null);

export default PostContext;
