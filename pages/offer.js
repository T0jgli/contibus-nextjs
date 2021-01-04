import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';
import Spinner from "../components/GlobalComponents/Spinner"

const Formoffer = dynamic(() => import("../components/OfferComponents/Formoffer"), { loading: () => <Spinner /> });
const Gallery = dynamic(() => import("../components/GlobalComponents/Gallery"), { loading: () => <Spinner /> });
import Carousel from '../components/GlobalComponents/Carousel';

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
                <meta property="og:image" content="https://contibus-nextjs.vercel.app/img/3.jpg" />
                <meta name="twitter:image" content="https://contibus-nextjs.vercel.app/img/3.jpg" />
                <meta property="og:url" content="https://contibus-nextjs.vercel.app/offer" />
                <link rel="alternate" hrefLang="en" href="https://contibus-nextjs.vercel.app/en/offer" />
                <link rel="alternate" hrefLang="hu" href="https://contibus-nextjs.vercel.app/offer" />
            </Head>
        </motion.div>
    )
}

export default Offer
