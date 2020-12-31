import React, { useEffect } from 'react'
import Head from 'next/head'

import Carousel from '../components/GlobalComponents/Carousel';
import Busesbody from "../components/BusesComponents/Busesbody"
import { pageVariants } from '../components/GlobalComponents/Initaltransition';

import { selectBusesData, selectlanguage, setbusesData, setmuzeumData } from '../lib/AppSlice'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import SetContentFulData from '../lib/SetContentFulData';

const Buses = ({ busesData, muzeumData }) => {
  const language = useSelector(selectlanguage)
  const busesDataselector = useSelector(selectBusesData)

  const dispatch = useDispatch()

  return (
    <motion.section initial="initial"
      animate="animate"
      variants={pageVariants}>
      <Carousel />
      <Busesbody />
      <Head>
        <title>{language === "en" ? ("Contibus - Specialist Coach Travel - Our Buses") : ("Contibus - Az utazás szakértői - Autóbuszaink")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      </Head>
    </motion.section>
  )
}

export default Buses