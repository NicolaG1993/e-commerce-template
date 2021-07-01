import { MemoizedContactForm } from "./ContactForm/ContactForm";
import { Clock, Email, Phone, Shop } from "../../data/allSVGs";

export default function Contact() {
    return (
        <section id="contact">
            <div className="contact-comp">
                <div className="contact-wrap">
                    <MemoizedContactForm />
                    <div className="contact-list">
                        <div className="contact-list-wrap">
                            <div>
                                <h2>Contatto</h2>
                                <div className="contact-list-box">
                                    <div className="contact-address-small-icon ">
                                        <Shop />
                                    </div>
                                    <div className="contact-address-text contact-address-text1">
                                        <p>Vicolo Teatro, 4, 37010</p>
                                        <p>Cavaion, Verona, IT</p>
                                    </div>
                                </div>

                                <div className="contact-list-box">
                                    <div className="contact-address-small-icon ">
                                        <Phone />
                                    </div>
                                    <div className="contact-address-text contact-address-text2">
                                        <p>
                                            <a href="tel:+393479792644">
                                                (+39) 347 9792 644
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-list-box">
                                    <div className="contact-address-small-icon ">
                                        <Email />
                                    </div>
                                    <div className="contact-address-text contact-address-text3">
                                        <p>
                                            <a href="mailto:damamyamamy@gmail.com">
                                                damamyamamy@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-list-box">
                                    <div className="contact-address-small-icon ">
                                        <Clock />
                                    </div>
                                    <div className="contact-address-text contact-address-text4">
                                        <p>
                                            Siamo aperti dal lunedí al venerdí
                                        </p>
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
                </div>
            </div>

            <div id="contact-map">
                <div className="contact-map-div">
                    <h2>Come venire a trovarci...</h2>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11178.56867680073!2d10.7683657!3d45.5374059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49eb521541b62a58!2sDa%20Mamy%20a%20Mamy!5e0!3m2!1sit!2sde!4v1621274725301!5m2!1sit!2sde"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>

                <div className="contact-icons-div">
                    <div>
                        <div className="contact-icons"></div>
                        <div className="contact-icons-text">
                            <h3>Orario negozio</h3>
                            <p>Lunedí - Venerdí</p>
                            <p>09:00 - 16:00</p>
                        </div>
                    </div>
                    <div>
                        <div className="contact-icons"></div>
                        <div className="contact-icons-text">
                            <h3>Spedizioni</h3>
                            <p>Servizio di spedizione </p>
                            <p>disponibile in tutta Italia</p>
                        </div>
                    </div>
                    <div>
                        <div className="contact-icons"></div>
                        <div className="contact-icons-text">
                            <h3>Assistenza</h3>
                            <p>Sempre disponibili ad</p>
                            <p>assistere i nostri clienti</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
