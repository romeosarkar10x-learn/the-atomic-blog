import { useContext } from "react";
import PostContext from "../../contexts/PostContext/PostContext";

export default function SearchPosts() {
    const context = useContext(PostContext);

    if (context === null) {
        console.error("[SearchPosts] Err: 'context' is 'null'");
        return <></>;
    }

    const { searchQuery, setSearchQuery } = context;
    return <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search posts..." />;
}
