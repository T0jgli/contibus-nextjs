import React from 'react';
import Head from 'next/head'

import Carousel from '../components/GlobalComponents/Carousel';
import Gallery from '../components/GlobalComponents/Gallery'
import Formoffer from '../components/OfferComponents/Formoffer';
import { pageVariants } from '../components/GlobalComponents/Initaltransition';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Offer = () => {
    const { locale } = useRouter()
    return (
        <motion.div initial="initial"
            animate="animate"
            variants={pageVariants}>
            <Carousel />
            <Formoffer />
            <Gallery />
            <Head>
                <title>{locale === "en" ? ("Offer - Contibus - Specialist Coach Travel") : ("Ajánlatkérés - Contibus - Az utazás szakértői")}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
        </motion.div>
    )
}

export default Offer
