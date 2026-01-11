import { OnAddPostFnType } from "../../types/fn";
import { Post } from "../../types/post";
import FormAddPost from "../FormAddPost";
import Posts from "../Posts";

export default function Main() {
    return (
        <main>
            <FormAddPost />
            <Posts />
        </main>
    );
}
