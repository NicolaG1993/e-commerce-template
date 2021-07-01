import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import images from "../Slider/img/images";

export default function Home() {
    return (
        <div id="home">
            <Slider slides={images} autoPlay={10} />
            <Link to={"/shop"}>Vedi tutti gli articoli</Link>
        </div>
    );
}
