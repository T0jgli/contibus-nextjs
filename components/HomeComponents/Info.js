import React from 'react'
import {
    MDBContainer, MDBRow, MDBCol, MDBAlert, MDBIcon
} from "mdbreact";
import { Fade } from "react-awesome-reveal";

import { useRouter } from 'next/router';

const Info = () => {
    const router = useRouter()

    return (
        <MDBContainer>
            <Fade triggerOnce>
                <MDBAlert color="dark" className="rounded mt-5 text-center">
                    <MDBIcon icon="exclamation" className=" pb-2 pt-xl-0 pb-xl-0 px-2" style={{ color: "#d50000" }} />
                    {router.locale === "en" ? ("In this given situation we would like to ask our customers to wear a mask during the administration") :
                        ("Egymás iránti bizalom és a helyzetre való tekintettel kérnénk mindenkit, hogy a személyes ügyintézés ideje alatt maszkot viseljenek")}
                    <MDBIcon icon="exclamation"
                        className=" pb-2 pt-xl-0 pb-xl-0 px-2" style={{ color: "#d50000" }} />
                </MDBAlert>
            </Fade>

            <MDBRow className="pt-5 mt-2 px-lg-0 px-2">
                <MDBCol md="6" className="mb-4">
                    <Fade triggerOnce>
                        <img src="/img/3.jpg" className="img-fluid mx-auto d-block logo" alt="Contibus logo" />
                    </Fade>
                </MDBCol>
                <MDBCol md="6" className="mb-4 px-0">
                    <Fade delay={200} triggerOnce>
                        <section>
                            <h2 className="mb-3">{router.locale === "en" ? ("Who are we?") : ("Kik vagyunk mi?")}</h2>
                            <hr />
                            <p className="m-0">{router.locale === "en" ? ("The company has been dealing passenger traffic since 1992.") :
                                ("Cégünk 1992 óta foglalkozik személyszállítással.")}</p>
                            <p className="m-0">{router.locale === "en" ? ("All of our buses fit the strict international standards.") :
                                ("Minden autóbuszunk megfelel a szigorú nemzetközi előírásoknak.")} </p>
                            <p className="m-0">{router.locale === "en" ? ("Our drivers have a lot of experience in European travel.") :
                                ("Gépkocsivezetőink nagy tapasztalattal rendelkeznek az európai utaztatásban.")}</p>
                            <p className="mt-1 mb-0 desctext">{router.locale === "en" ? ("Our partners: ") : ("Partnereink:")}
                            </p>
                            <ul className="mt-0 pt-0 partners desctext">
                                <li>
                                    {router.locale === "en" ? ("travel agencies") : ("utazási irodák")}
                                </li>
                                <li>
                                    {router.locale === "en" ? ("music bands") : ("zenekarok")}
                                </li>
                                <li>
                                    {router.locale === "en" ? ("companies") : ("vállalkozások")}
                                </li>
                                <li>
                                    {router.locale === "en" ? ("foundations") : ("alapítványok")}
                                </li>
                                <li>
                                    {router.locale === "en" ? ("schools") : ("iskolák")}
                                </li>
                                <li>
                                    {router.locale === "en" ? ("sports associations") : ("sportegyesületek")}
                                </li>
                                <li>
                                    {router.locale === "en" ? ("or just a group of friends") : ("vagy csak baráti társaságok")}
                                </li>
                            </ul>
                        </section>
                    </Fade>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Info
