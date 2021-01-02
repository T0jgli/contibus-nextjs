import React from 'react';
import Head from 'next/head'

import Info from "../components/HomeComponents/Info"
import Info2 from "../components/HomeComponents/Info2"

import Cards from "../components/HomeComponents/Cards"
import Streak from '../components/HomeComponents/Streak';
import Gallery from '../components/GlobalComponents/Gallery';
import Carousel from '../components/GlobalComponents/Carousel';
import { pageVariants } from '../components/GlobalComponents/Initaltransition';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Home = () => {
    const { locale } = useRouter()
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
                <title>{locale === "en" ? ("Contibus - Specialist Coach Travel") : ("Contibus - Az utazás szakértői")}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta property="og:image" content="https://contibus-nextjs.vercel.app/img/3.jpg" />
                <meta name="twitter:image" content="https://contibus-nextjs.vercel.app/img/3.jpg" />
                <meta property="og:url" content="https://contibus-nextjs.vercel.app" />
            </Head>
        </motion.div>
    )
}

export default Home