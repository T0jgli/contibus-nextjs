import React, { useState } from 'react'

import { MDBCarousel, MDBMask, MDBCarouselInner, MDBCarouselItem, MDBView, MDBIcon, MDBBtn } from "mdbreact";
import Contactform from './Contactform';
import ReactGA from 'react-ga'
import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';

function shufflearray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = array[i]
        array[i] = array[j]
        array[j] = k
    }
    return array
}

const Carousel = () => {
    const router = useRouter();
    const [contactform, setcontactform] = useState(false)
    const carids = ["carr11", "carr22", "carr33"].sort(() => 0.5 - Math.random())
    return (
        <>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className={router.pathname !== "/" ? "carousel carouselup z-depth-1 " : "carousel headerclip z-depth-1"}
            >
                <MDBCarouselInner className="carousel-inner">
                    <MDBCarouselItem className="carousel-item" itemId="1">
                        <MDBView id={carids[0]} className={router.pathname !== "/" ? "h-100 carr" : "carr"}>
                            <MDBMask overlay="black-light" className="flex-center">
                                <div className="text-center white-text mx-5">
                                    <Fade triggerOnce direction="down">
                                        <h1 className="mb-4">
                                            <strong className="font-weight-bold">{router.locale === "en" ?
                                                (<span><span className="d-none d-md-inline">Contibus – </span>Specialist Coach Travel</span>) :
                                                (<span><span className="d-none d-md-inline">Contibus – </span>Az utazás szakértői</span>)}</strong>

                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <p className="mb-4 d-block">
                                            <span style={{ letterSpacing: "1px" }}>
                                                <MDBIcon icon="check" className="px-2" />{router.locale === "en" ? ("We offer culture and experience") : ("Kultúrát és élményt adunk")}
                                                <MDBIcon icon="check" className="px-2" />
                                            </span>
                                        </p>
                                    </Fade>
                                    {router.pathname === "/" ? (
                                        <>
                                            <Fade direction="up" triggerOnce>

                                                <MDBBtn onClick={() => {
                                                    setcontactform(true);
                                                    ReactGA.modalview('/contactform');

                                                }}
                                                    color="warning" size="lg"
                                                    className="font-weight-bold black-text roundedbtn kartya mt-5"><span
                                                        className="">{router.locale === "en" ? ("Get in contact with us!") : ("Lépjen kapcsolatba velünk!")}</span>
                                                </MDBBtn>
                                            </Fade>

                                        </>
                                    ) : (null)
                                    }
                                </div>
                            </MDBMask>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem className="carousel-item" itemId="2">
                        <MDBView id={carids[1]} className={router.pathname !== "/" ? "h-100 carr" : "carr"}>
                            <MDBMask overlay="black-light" className="flex-center">
                                <div className="text-center white-text mx-5">
                                    <Fade triggerOnce direction="down">
                                        <h1 className="mb-4">
                                            <strong className="font-weight-bold">{router.locale === "en" ?
                                                (<span><span className="d-none d-md-inline">Contibus – </span>Specialist Coach Travel</span>) :
                                                (<span><span className="d-none d-md-inline">Contibus – </span>Az utazás szakértői</span>)}</strong>
                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <p className="mb-4 d-block text-center">
                                            <span style={{ letterSpacing: "1px" }}>
                                                <MDBIcon icon="check" className="px-2 d-md-inline d-none" /> {router.locale === "en" ? ("Safety") : ("Biztonság")}
                                                <MDBIcon icon="check" className="px-2" />{router.locale === "en" ? ("Comfort") : ("Kényelem")}
                                                <MDBIcon icon="check" className="px-2" />{router.locale === "en" ? ("Standards") : ("Színvonal")}
                                                <MDBIcon icon="check" className="px-2 d-md-inline d-none" />
                                            </span>
                                        </p>
                                    </Fade>

                                    {router.pathname === "/" ? (
                                        <>
                                            <Fade direction="up" triggerOnce>

                                                <MDBBtn onClick={() => {
                                                    setcontactform(true);
                                                    ReactGA.modalview('/contactform');

                                                }}
                                                    color="warning" size="lg"
                                                    className="font-weight-bold black-text roundedbtn kartya mt-5"><span
                                                        className="">{router.locale === "en" ? ("Get in contact with us!") : ("Lépjen kapcsolatba velünk!")}</span>
                                                </MDBBtn>
                                            </Fade>

                                        </>
                                    ) : (null)
                                    }
                                </div>
                            </MDBMask>

                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem className="carousel-item" itemId="3">
                        <MDBView id={carids[2]} className={router.pathname !== "/" ? "h-100 carr" : "carr"}>
                            <MDBMask overlay="black-light" className="flex-center">
                                <div className="text-center white-text mx-5">
                                    <Fade triggerOnce direction="down">
                                        <h1 className="mb-4">
                                            <strong className="font-weight-bold">{router.locale === "en" ?
                                                (<span><span className="d-none d-md-inline">Contibus – </span>Specialist Coach Travel</span>) :
                                                (<span><span className="d-none d-md-inline">Contibus – </span>Az utazás szakértői</span>)}</strong>

                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <p className="mb-4 d-block">
                                            <span style={{ letterSpacing: "1px" }}>
                                                <MDBIcon icon="check" className="px-2" />{router.locale === "en" ? ("We offer culture and experience") : ("Kultúrát és élményt adunk")}
                                                <MDBIcon icon="check" className="px-2" />
                                            </span>
                                        </p>
                                    </Fade>

                                    {router.pathname === "/" ? (
                                        <>
                                            <Fade direction="up" triggerOnce>

                                                <MDBBtn onClick={() => {
                                                    setcontactform(true);
                                                    ReactGA.modalview('/contactform');

                                                }}
                                                    color="warning" size="lg"
                                                    className="font-weight-bold black-text roundedbtn kartya mt-5"><span
                                                        className="">{router.locale === "en" ? ("Get in contact with us!") : ("Lépjen kapcsolatba velünk!")}</span>
                                                </MDBBtn>
                                            </Fade>

                                        </>
                                    ) : (null)
                                    }
                                </div>
                            </MDBMask>
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
            <Contactform contactform={contactform} setcontactform={setcontactform} />

        </>
    )
}

export default Carousel
