import React, { useState } from 'react'
import {
    MDBContainer, MDBMask, MDBRow, MDBCol
} from "mdbreact";

import { Fade } from "react-awesome-reveal";

import { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { useRouter } from 'next/router';
import NumberFormat from 'react-number-format';


const Streak = () => {
    const { locale } = useRouter()
    const [focus, setFocus] = useState(false)
    const [bg, setbg] = useState("")

    useEffect(() => {
        const ramdom = Math.floor(Math.random() * (3 - 1 + 1));
        const images = ["/img/carousel_1_.jpg", "/img/carousel_2_.jpg", "/img/carousel_3_.jpg"]
        setbg(images[ramdom])
    }, [])

    return (
        <div className="streak streak-photo streak-long-2">
            <Parallax bgImage={bg} strength={600}>
                <MDBMask overlay="black-light" className="flex-center">
                    <MDBContainer className="py-5">
                        <Fade triggerOnce direction="down">
                            <h3 className="text-center mb-5 pb-4 white-text font-weight-bolder">
                                <span>{locale === "en" ? ("Some facts about us") : ("Néhány tény rólunk")}</span>
                            </h3>
                        </Fade>
                        <Fade delay={75} triggerOnce direction="up">
                            <MDBRow className="text-center">
                                <MDBCol md="3" className="mb-2">
                                    <h1 className="white-text mb-1 font-weight-bold">
                                        <NumberFormat suffix=" +" thousandSeparator=" " value={80000} displayType="text" />


                                    </h1>
                                    <p className="white-text text-uppercase mt-3 font-weight-bold">{locale === "en" ? ("Happy clients") : ("Elégedett ügyfél")}</p>
                                </MDBCol>
                                <MDBCol md="3" className="mb-2">
                                    <h1 className="white-text mb-1 font-weight-bold">

                                        <NumberFormat suffix=" +" thousandSeparator=" " value={100000} displayType="text" />

                                    </h1>
                                    <p className="white-text text-uppercase mt-3 font-weight-bold" >{locale === "en" ? ("Projects completed") : ("Sikeres projekt")}</p>
                                </MDBCol>
                                <MDBCol md="3" className="mb-2">
                                    <h1 className="white-text mb-1 font-weight-bold">
                                        <NumberFormat suffix=" +" thousandSeparator=" " value={50000} displayType="text" />
                                    </h1>
                                    <p className="white-text text-uppercase mt-3 font-weight-bold">{locale === "en" ? ("Destinations") : ("Úticél")}</p>
                                </MDBCol>
                                <MDBCol md="3" className="mb-2">
                                    <h1 className="white-text mb-1 font-weight-bold">
                                        <NumberFormat suffix=" +" thousandSeparator=" " value={150} displayType="text" />

                                    </h1>
                                    <p className="white-text text-uppercase mt-3 font-weight-bold">{locale === "en" ? ("Visited country") : ("Meglátogatott ország")}</p>
                                </MDBCol>
                            </MDBRow>

                        </Fade>
                    </MDBContainer>
                </MDBMask>
            </Parallax>
        </div>
    )
}

export default Streak
