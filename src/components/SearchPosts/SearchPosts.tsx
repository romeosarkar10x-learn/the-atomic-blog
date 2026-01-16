import { usePostContext } from "../../hooks/usePostContext";

export default function SearchPosts() {
    const context = usePostContext();

    const { searchQuery, setSearchQuery } = context;
    return <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search posts..." />;
}
