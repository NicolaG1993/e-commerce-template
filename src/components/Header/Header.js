import Nav from "./Nav";
import Logo from "../Logo/Logo";
import ColorModeButton from "./ColorModeButton";

export default function Header({ pages }) {
    return (
        <header>
            <div>
                <Logo />
                <Nav pages={pages} />
                <ColorModeButton />
            </div>
        </header>
    );
}
