import React from 'react'
import Head from 'next/head'

import Carousel from '../components/GlobalComponents/Carousel';
import Busesbody from "../components/BusesComponents/Busesbody"
import { pageVariants } from '../components/GlobalComponents/Initaltransition';

import { selectlanguage } from '../lib/AppSlice'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';

const Buses = () => {
  const language = useSelector(selectlanguage)
  return (
    <motion.section initial="initial"
      animate="animate"
      variants={pageVariants}>
      <Carousel />
      <Busesbody />
      <Head>
        <title>{language === "en" ? ("Contibus - Our Buses") : ("Contibus - Autóbuszaink")}</title>
      </Head>
    </motion.section>
  )
}

export default Buses
