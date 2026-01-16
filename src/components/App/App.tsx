import { useEffect, useState } from "react";

import Header from "../Header";
import Main from "../Main";
import Archive from "../Archive";
import Footer from "../Footer";

import PostContextProvider from "../../contexts/PostContextProvider";

export default function App() {
    // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
    const [isFakeDark, setIsFakeDark] = useState(false);

    useEffect(
        function () {
            document.documentElement.classList.toggle("fake-dark-mode");
        },
        [isFakeDark],
    );

    return (
        /* Provide value to child components */
        <section>
            <button onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)} className="btn-fake-dark-mode">
                {isFakeDark ? "☀️" : "🌙"}
            </button>
            <PostContextProvider>
                <Header />
                <Main />
                <Archive />
                <Footer />
            </PostContextProvider>
        </section>
    );
}
