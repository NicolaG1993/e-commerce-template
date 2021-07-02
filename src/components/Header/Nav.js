import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Nav({ pages }) {
    const history = useHistory();
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        history.listen((location) => {
            console.log(`You are on this page: ${location.pathname}`);
            setPath(location.pathname);
        });
    }, [history]);

    return (
        <nav>
            {pages.map((page, i) => (
                <Link
                    key={page.title + i}
                    to={page.url}
                    className={path == page.url ? "nav-link-active" : ""}
                >
                    {page.title}
                </Link>
            ))}
        </nav>
    );
}
