import React from 'react';
import ReactGA from 'react-ga'
import { useRouter } from "next/router"
import Head from 'next/head'

import Info from "../components/HomeComponents/Info"
import Info2 from "../components/HomeComponents/Info2"

import Cards from "../components/HomeComponents/Cards"
import Streak from '../components/HomeComponents/Streak';
import Gallery from '../components/GlobalComponents/Gallery';
import Carousel from '../components/GlobalComponents/Carousel';
import { pageVariants } from '../components/GlobalComponents/Initaltransition';

import { selectlanguage } from '../lib/AppSlice'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';

const Home = () => {
    const router = useRouter()
    ReactGA.pageview(router.pathname)

    const language = useSelector(selectlanguage)

    return (
        <motion.div initial="initial"
            animate="animate"
            variants={pageVariants}
        >
            <Carousel />
            <Info />
            <Gallery />
            <Info2 />
            <Streak />
            <Cards />
            <Head>
                <title>{language === "en" ? ("Contibus - Home") : ("Contibus - Főoldal")}</title>
            </Head>
        </motion.div>
    )
}

export default Home
