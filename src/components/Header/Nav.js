import { Link } from "react-router-dom";

export default function Nav({ pages }) {
    return (
        <nav>
            {pages.map((page, i) => (
                <Link key={page.title + i} to={page.url}>
                    {page.title}
                </Link>
            ))}
        </nav>
    );
}
