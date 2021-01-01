import React from 'react'

import { motion } from 'framer-motion'
import { pageVariants } from '../../components/GlobalComponents/Initaltransition'
import Carousel from '../../components/GlobalComponents/Carousel'

import { MDBBtn } from 'mdbreact'
import OneBusBody from '../../components/BusesComponents/OneBusBody'
import { Fade } from 'react-awesome-reveal'
import { useRouter } from 'next/router'
import { wrapper } from '../../lib/store'
import SetContentFulData from '../../lib/SetContentFulData'
import { setbusesData } from '../../lib/AppSlice'

const OneBus = () => {
    const router = useRouter()
    return (
        <motion.section initial="initial"
            animate="animate"
            variants={pageVariants}>
            <Carousel />
            <img src="/img/3.jpg" className="img-fluid mx-auto d-none logo" width="220px" id="contibus-logo" alt="logo" />
            <Fade triggerOnce direction="up">
                <div className="flex-center mt-5 mx-auto">
                    <MDBBtn id="back-button" color="warning" onClick={() => {
                        router.push("/buses")
                    }} className="my-1 black-text roundedbtn font-weight-bolder">
                        « {router.locale === "en" ? ("Back") : ("Vissza")}
                    </MDBBtn>
                </div>
            </Fade>
            <OneBusBody />
        </motion.section>
    )
}

export default OneBus



export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const busesData = await SetContentFulData("busesData", "-fields.oradij")
    store.dispatch(
        setbusesData(
            {
                busesData: busesData
            }
        )
    );
});