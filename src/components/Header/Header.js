import { Link } from "react-router-dom";
import Nav from "./Nav";
import Logo from "../Logo/Logo";
import ColorModeButton from "./ColorModeButton";

export default function Header({ pages }) {
    return (
        <header>
            <div>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav pages={pages} />
                <ColorModeButton />
            </div>
        </header>
    );
}
