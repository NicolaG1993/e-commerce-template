import { Clock, Email, Phone, Shop } from "../../data/allSVGs";

export default function ContactList() {
    return (
        <div id="contact-list" className="flex-box-column">
            <div className="flex-box-column">
                <div className="bottom-1em">
                    <h2>Contatto</h2>
                    <div className="contact-list-blocks">
                        <div>
                            <Shop />
                        </div>
                        <div>
                            <p>Vicolo Teatro, 4, 37010</p>
                            <p>Cavaion, Verona, IT</p>
                        </div>
                    </div>

                    <div className="contact-list-blocks">
                        <div>
                            <Phone />
                        </div>
                        <div>
                            <p>
                                <a href="tel:+393479792644">
                                    (+39) 347 9792 644
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="contact-list-blocks">
                        <div>
                            <Email />
                        </div>
                        <div>
                            <p>
                                <a href="mailto:damamyamamy@gmail.com">
                                    damamyamamy@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="contact-list-blocks">
                        <div>
                            <Clock />
                        </div>
                        <div>
                            <p>Siamo aperti dal lunedí al venerdí</p>
                            <p>dalle 09:00 alle 16:00</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Seguici</h2>
                    <div className="contact-list-socials">
                        <p>
                            <a
                                href="https://www.facebook.com/Da-Mamy-A-Mamy-105663897718034/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Facebook
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.instagram.com/damamyamamy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
