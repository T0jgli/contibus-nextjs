import React from 'react';
import ReactGA from 'react-ga'
import { useRouter } from "next/router"
import Head from 'next/head'

import Carousel from '../components/GlobalComponents/Carousel';
import Gallery from '../components/GlobalComponents/Gallery'
import Formoffer from '../components/OfferComponents/Formoffer';
import { pageVariants } from '../components/GlobalComponents/Initaltransition';

import { selectlanguage } from '../lib/AppSlice'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';

const Offer = () => {
    const router = useRouter()
    ReactGA.pageview(router.pathname)
    const language = useSelector(selectlanguage)

    return (
        <motion.div initial="initial"
            animate="animate"
            variants={pageVariants}>
            <Carousel />
            <Formoffer />
            <Gallery />
            <Head>
                <title>{language === "en" ? ("Contibus - Offer") : ("Contibus - Ajánlatkérés")}</title>
            </Head>
        </motion.div>
    )
}

export default Offer
