import { Link } from "react-router-dom";
const pages = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Shop", url: "/shop" },
]; // portare in redux 🍄

export default function Footer() {
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
