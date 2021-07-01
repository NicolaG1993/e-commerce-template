import { Link } from "react-router-dom";
import text from "./data/text";

export default function About() {
    return (
        <section id="aboutus">
            <div className="aboutus-comp-div aboutus-box1">
                <div className="aboutus-box1-text">
                    <h1>{text.block1.heading}</h1>
                    <p>{text.block1.p_1}</p>
                    <p>{text.block1.p_2}</p>
                </div>
            </div>
            <div className="aboutus-comp-div aboutus-box2">
                <div className="aboutus-box2-text">
                    <h2>{text.block2.heading}</h2>
                    <p>{text.block2.p_1}</p>
                    <p>{text.block2.p_2}</p>
                    <p>{text.block2.p_3}</p>
                    <Link to={"/contact"}>Contattaci!</Link>
                </div>
            </div>
            <div className="aboutus-comp-div aboutus-box3">
                <div className="aboutus-box3-text">
                    <h2>{text.block3.heading}</h2>
                    <p>{text.block3.p_1}</p>
                    <p>{text.block3.p_2}</p>
                </div>
            </div>
            <div className="aboutus-comp-div aboutus-box4">
                <h2>{text.block4.heading}</h2>
            </div>
        </section>
    );
}
