import Nav from "./Nav";
import Logo from "../Logo/Logo";
import ColorModeButton from "./ColorModeButton";

export default function Header() {
    return (
        <header>
            <div>
                <Logo />
                <ColorModeButton />
            </div>
            <Nav />
        </header>
    );
}
