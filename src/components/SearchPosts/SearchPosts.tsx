import { Dispatch, SetStateAction } from "react";

export default function SearchPosts({
    searchQuery,
    setSearchQuery,
}: {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
}) {
    return <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search posts..." />;
}
