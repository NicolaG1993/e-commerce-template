import { useEffect, useState } from "react";
import { setTheme } from "../../utils/themes";

export default function ColorModeButton() {
    const [togClass, setTogClass] = useState("light");
    let theme = localStorage.getItem("theme");

    const toggleColors = () => {
        if (localStorage.getItem("theme") === "theme-dark") {
            setTheme("theme-light");
            setTogClass("light");
        } else {
            setTheme("theme-dark");
            setTogClass("dark");
        }
    };

    useEffect(() => {
        if (localStorage.getItem("theme") === "theme-dark") {
            setTogClass("dark");
        } else if (localStorage.getItem("theme") === "theme-light") {
            setTogClass("light");
        }
    }, [theme]);

    return (
        <div className={"color-mode-wrap"}>
            <div
                onClick={toggleColors}
                className={`color-mode-toggle ${
                    togClass === "light" ? "sun" : "moon"
                }`}
            >
                <div className="color-mode-icons">
                    <div id="Sun" />
                    <div id="Moon" />
                </div>
                <input
                    id="toggleColorMode"
                    name="toggleColorMode"
                    type="checkbox"
                    defaultChecked={togClass}
                />
            </div>
        </div>
    );
}
