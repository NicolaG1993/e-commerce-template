import Nav from "./Nav";
import Logo from "../Logo/Logo";
import ColorModeButton from "./ColorModeButton";

export default function Header({ pages }) {
    return (
        <header>
            <div>
                <Logo />
                <ColorModeButton />
            </div>
            <Nav pages={pages} />
        </header>
    );
}
