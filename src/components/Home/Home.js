import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div id="home">
            <div>
                <h2>SLIDER</h2>
            </div>

            <Link to={"/shop"}>Vedi tutti gli articoli</Link>
        </div>
    );
}
