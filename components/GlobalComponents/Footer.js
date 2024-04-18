import { useState } from "react";
import { MDBFooter, MDBIcon } from "mdbreact";

import Lostitems from "./Lostitems";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { pageview } from "../../lib/helpers/gtag";

const Footer = () => {
    const [elveszett, setelveszett] = useState(false);
    const { locale } = useRouter();

    return (
        <>
            <MDBFooter color="elegant-color-dark" className="font-small z-depth-2">
                <Fade triggerOnce>
                    <div className="text-center container text-md-left pt-4">
                        <div className="pt-4 row">
                            <div className="mx-auto col-md-5 col-lg-6 col-xl-5 mb-1" id="map-div">
                                {
                                    <div className="p-0 map-container">
                                        <div className="map">
                                            <GoogleMapsEmbed
                                                title="Google Maps Iframe"
                                                mode="place"
                                                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPSKEY}
                                                q="place_id:ChIJcZcmwULcQUcRbO4wF14ieDg"
                                                frameBorder="0"
                                            />
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-1" id="footer-links">
                                <h5 className="text-uppercase font-weight-bold">{locale === "en" ? "Others" : "Egyéb"}</h5>
                                <hr className="warning-color accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                                <p>
                                    <a
                                        onClick={() => {
                                            setelveszett(!elveszett);
                                            pageview("/lostitems");
                                        }}
                                    >
                                        {locale === "en" ? "Lost items" : "Elvesztett tárgyak"}
                                    </a>
                                </p>
                                <p>
                                    <a href="/files/utazasi-szerzodes-2020.pdf" target="_blank">
                                        {locale === "en" ? "Terms and Conditions" : "Szerződési feltételek"}
                                    </a>
                                </p>
                                <p>
                                    <a href="/files/megrendelolap.docx">{locale === "en" ? "Order form" : "Megrendelőlap"}</a>
                                </p>
                                {/* <p>
                                    <a href="#">{locale === "en" ? "Baggage regulations" : "Poggyász szabályzat"}</a>
                                </p> */}
                                <p>
                                    <a
                                        onClick={() => {
                                            localStorage.clear();
                                            document.cookie.split(";").forEach(function (c) {
                                                document.cookie = c
                                                    .replace(/^ +/, "")
                                                    .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                                            });
                                            window.location.reload(false);
                                        }}
                                    >
                                        {locale === "en" ? "Clear cookies" : "Sütik törlése"}
                                    </a>
                                </p>
                            </div>

                            <div className="mx-auto col-md-4 col-lg-3 col-xl-3 mb-md-0 mb-xl-1" id="footer-contact">
                                <h5 className="text-uppercase font-weight-bold">{locale === "en" ? "Contact" : "Kapcsolat"}</h5>
                                <hr className="warning-color accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                                <p>
                                    <MDBIcon icon="home" className="mr-3" />
                                    1088 Budapest, Szentkirályi utca 5{" "}
                                    <span style={{ opacity: "0.8" }} className="ml-lg-4">
                                        {locale === "en" ? " (HQ)" : " (székhely)"}
                                    </span>
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="mr-3" />
                                    contibus@contibus.hu
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="mr-3" />
                                    +36 30 934-9319
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="mr-3" />
                                    338-2422
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto d-flex my-4 row">
                            <div className="mx-auto col text-center" id="footer-opening">
                                <h5 className="text-uppercase font-weight-bold">{locale === "en" ? "Our Office" : "Irodánk"}</h5>
                                <hr className="warning-color accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                                <p className="pb-2">1075 Budapest, Síp utca 4.</p>
                                <p>
                                    {locale === "en" ? "From Monday to Friday" : "Hétfőtől Péntekig"}:{" "}
                                    <span className="font-weight-bolder">9:00 - 17:00</span>
                                </p>
                                <p>
                                    {locale === "en" ? "Saturday, Sunday: " : "Szombat, vasárnap: "}
                                    <span className="font-weight-bolder">{locale === "en" ? "Closed" : "Zárva"} </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <div className="footer-copyright text-center py-3">
                    © {new Date().getFullYear()} Copyright:{" "}
                    <span>
                        <span className="text-light">Contibus </span>
                        <span className="white-text">
                            <i className="fas fa-times"></i>
                        </span>
                        <a style={{ opacity: "0.75" }} href="https://www.instagram.com/kovalikadam/" rel="noopener noreferrer" target="_blank">
                            {" "}
                            tojglee
                        </a>
                    </span>
                </div>
            </MDBFooter>

            <Lostitems elveszett={elveszett} setelveszett={setelveszett} />
        </>
    );
};

export default Footer;
