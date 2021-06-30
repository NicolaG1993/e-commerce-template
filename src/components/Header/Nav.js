import { Link } from "react-router-dom";
const pages = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Shop", url: "/shop" },
]; // portare in redux 🍄

export default function Nav() {
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
