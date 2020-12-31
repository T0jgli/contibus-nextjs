import React from 'react'

import { motion } from 'framer-motion'
import { pageVariants } from '../../components/GlobalComponents/Initaltransition'
import Carousel from '../../components/GlobalComponents/Carousel'
import Scrolltotop from '../../components/GlobalComponents/Scrolltotop'

import { MDBBtn } from 'mdbreact'
import OneBusBody from '../../components/BusesComponents/OneBusBody'
import { useSelector } from 'react-redux'
import { selectlanguage } from '../../lib/AppSlice'
import { Fade } from 'react-awesome-reveal'
import { useRouter } from 'next/router'

const OneBus = () => {
    const language = useSelector(selectlanguage)
    const router = useRouter()
    return (
        <motion.section initial="initial"
            animate="animate"
            variants={pageVariants}>
            <Scrolltotop />
            <Carousel />
            <img src="/img/3.jpg" className="img-fluid mx-auto d-none logo" width="220px" id="contibus-logo" alt="logo" />
            <Fade triggerOnce direction="up">
                <div className="flex-center mt-5 mx-auto">
                    <MDBBtn id="back-button" color="warning" onClick={() => {
                        window.history.back()
/*                         if (router.length > 2)
                            router.back()
                        else router.push("/buses")
 */                    }} className="my-1 black-text roundedbtn font-weight-bolder">
                        « {language === "en" ? ("Back") : ("Vissza")}
                    </MDBBtn>
                </div>
            </Fade>

            <OneBusBody />
        </motion.section>
    )
}

export default OneBus