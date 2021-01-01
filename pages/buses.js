import React from 'react'
import Head from 'next/head'

import Carousel from '../components/GlobalComponents/Carousel';
import Busesbody from "../components/BusesComponents/Busesbody"
import { pageVariants } from '../components/GlobalComponents/Initaltransition';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Buses = () => {
  const { locale } = useRouter()

  return (
    <motion.section initial="initial"
      animate="animate"
      variants={pageVariants}>
      <Carousel />
      <Busesbody />
      <Head>
        <title>{locale === "en" ? ("Our Buses - Contibus - Specialist Coach Travel") : ("Autóbuszaink - Contibus - Az utazás szakértői")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      </Head>
    </motion.section>
  )
}

export default Buses