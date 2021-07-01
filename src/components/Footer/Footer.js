import { Link } from "react-router-dom";

export default function Footer({ pages }) {
    return (
        <footer>
            <h3>Links</h3>
            <ul>
                {pages.map((page, i) => (
                    <li key={page.title + i}>
                        <Link to={page.url}>{page.title}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
