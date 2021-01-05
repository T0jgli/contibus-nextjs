import React, { useState } from 'react'
import {
    MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIframe, MDBIcon
} from "mdbreact";

import Lostitems from './Lostitems';
import { Fade } from "react-awesome-reveal";
import ReactGA from 'react-ga'
import { useRouter } from 'next/router';

const Footer = () => {
    const [elveszett, setelveszett] = useState(false)
    const { locale } = useRouter()

    return (
        <>
            <MDBFooter color="elegant-color-dark" className="font-small z-depth-2">
                <Fade triggerOnce>
                    <MDBContainer className="text-center text-md-left pt-4">
                        <MDBRow className="pt-4">
                            <MDBCol md="5" lg="6" xl="5" className="mx-auto mb-1" id="map-div">
                                {<div className="p-0 map-container" style={{ height: "80%" }}>
                                    <MDBIframe
                                        src={"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJcZcmwULcQUcRbO4wF14ieDg&key=" + process.env.NEXT_PUBLIC_GOOGLE_MAPSKEY}
                                        frameborder="0" style={{ height: "80%" }} />
                                </div>}
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-1" id="footer-links">
                                <h6 className="text-uppercase font-weight-bold">{locale === "en" ? ("Others") : ("Egyéb")}</h6>
                                <hr className="warning-color accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                                <p onClick={() => {
                                    setelveszett(!elveszett);
                                    ReactGA.modalview('/lostitems');
                                }} style={{ cursor: "pointer" }}>
                                    {locale === "en" ? ("Lost items") : ("Elvesztett tárgyak")}
                                </p>
                                <p>
                                    <a href="/files/utazasi-szerzodes-2020.pdf" target="_blank">{locale === "en" ? ("Terms and Conditions") : ("Szerződési feltételek")}</a>
                                </p>
                                <p>
                                    <a href="/files/megrendelolap.docx">{locale === "en" ? ("Order form") : ("Megrendelőlap")}</a>
                                </p>
                                <p>
                                    <a href="#">{locale === "en" ? ("Baggage regulations") : ("Poggyász szabályzat")}</a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-xl-1" id="footer-contact">
                                <h6 className="text-uppercase font-weight-bold">{locale === "en" ? ("Contact") : ("Kapcsolat")}</h6>
                                <hr className="warning-color accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                                <p>
                                    <MDBIcon icon="home" className="mr-3" />1088 Budapest, Szentkirályi utca 5 <span style={{ opacity: "0.8" }} className="ml-4">{locale === "en" ? (" (HQ)") : (" (székhely)")}</span></p>
                                <p>
                                    <MDBIcon icon="envelope" className="mr-3" />contibus@contibus.hu</p>
                                <p>
                                    <MDBIcon icon="phone" className="mr-3" />+36 30 934-9319</p>
                                <p>
                                    <MDBIcon icon="print" className="mr-3" />338-2422</p>

                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mx-auto d-flex my-4">
                            <MDBCol className="mx-auto text-center" id="footer-opening">
                                <h6 className="text-uppercase font-weight-bold">{locale === "en" ? ("Our Office") : ("Irodánk")}</h6>
                                <hr className="warning-color accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                                <p className="pb-2">1075 Budapest, Síp utca 4.</p>
                                <p>{locale === "en" ? ("From Monday to Friday") : ("Hétfőtől Péntekig")}: <span className="font-weight-bolder">9:00 - 17:00</span>
                                </p>
                                <p>{locale === "en" ? ("Saturday, Sunday: ") : ("Szombat, vasárnap: ")}
                                    <span className="font-weight-bolder">{locale === "en" ? ("Closed") : ("Zárva")} </span>
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </Fade>
                <div className="footer-copyright text-center py-3">© {(new Date().getFullYear())} Copyright: <span>
                    <span className="text-light">Contibus </span>
                    <span className="white-text">
                        <i
                            className="fas fa-times">
                        </i>
                    </span>
                    <a style={{ opacity: "0.75" }} href="https://www.instagram.com/kovalikadam/" rel="noopener noreferrer"
                        target="_blank"> tojglee</a>

                </span>
                </div>

            </MDBFooter>

            <Lostitems elveszett={elveszett} setelveszett={setelveszett} />
        </>
    )
}

export default Footer
