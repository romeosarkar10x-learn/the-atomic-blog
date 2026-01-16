import { useContext } from "react";
import PostContext from "../contexts/PostContext/PostContext";

export function usePostContext() {
    const context = useContext(PostContext);

    if (context === null) {
        const message = "[usePostContext] Err: 'context' is 'null'";
        console.error(message);
        throw new Error(message);
    }

    return context;
}
