import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div id="home">
            <h2>HOME</h2>
            <Link to={"/shop"}>Vedi tutti gli articoli</Link>
        </div>
    );
}
