import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <h2>NAV</h2>
            <Link to={"/"}>Home</Link>
            <Link to={"/shop"}>Shop</Link>
        </nav>
    );
}
