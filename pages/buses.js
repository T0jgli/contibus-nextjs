import React from 'react'
import ReactGA from 'react-ga'
import { useRouter } from "next/router"
import Head from 'next/head'

import Carousel from '../components/GlobalComponents/Carousel';
import Busesbody from "../components/BusesComponents/Busesbody"
import { pageVariants } from '../components/GlobalComponents/Initaltransition';

import { selectlanguage } from '../lib/AppSlice'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';

const Buses = () => {
  const router = useRouter()
  ReactGA.pageview(router.pathname)
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
