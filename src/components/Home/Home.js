import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import images from "../Slider/img/images";

export default function Home() {
    return (
        <div id="home">
            <Slider slides={images} autoPlay={10} />
            <div className="large-box">
                <Link to={"/shop"}>Vedi tutti gli articoli</Link>
            </div>
            <div className="large-box"></div>
            <div className="large-box"></div>
        </div>
    );
}
