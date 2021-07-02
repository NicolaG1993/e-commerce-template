import { Link } from "react-router-dom";
import text from "./data/text";

export default function About() {
    return (
        <section id="aboutus">
            <div className="medium-box flex-box-centered high-padding">
                <div className="aboutus-box1-text">
                    <h1 className="bottom-1em">{text.block1.heading}</h1>
                    <p>{text.block1.p_1}</p>
                    <p>{text.block1.p_2}</p>
                </div>
            </div>
            <div className="medium-box grid-box-6and4 high-padding">
                <div className="aboutus-box2-text">
                    <h2 className="bottom-2em">{text.block2.heading}</h2>
                    <p>{text.block2.p_1}</p>
                    <p className="bottom-1em">{text.block2.p_2}</p>
                    <p className="bottom-2em">{text.block2.p_3}</p>
                    <Link to={"/contact"}>Contattaci!</Link>
                </div>
            </div>
            <div className="medium-box aboutus-box3 high-padding">
                <div className="aboutus-box3-text">
                    <h2 className="bottom-1em">{text.block3.heading}</h2>
                    <p>{text.block3.p_1}</p>
                    <p>{text.block3.p_2}</p>
                </div>
            </div>
            <div className="medium-box aboutus-box4 high-padding">
                <h2 className="bottom-1em">{text.block4.heading}</h2>
            </div>
        </section>
    );
}
