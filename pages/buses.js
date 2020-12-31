import React, { useEffect } from 'react'
import Head from 'next/head'

import Carousel from '../components/GlobalComponents/Carousel';
import Busesbody from "../components/BusesComponents/Busesbody"
import { pageVariants } from '../components/GlobalComponents/Initaltransition';

import { selectlanguage, setbusesData, setmuzeumData } from '../lib/AppSlice'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import SetContentFulData from '../lib/SetContentFulData';

const Buses = () => {
  const language = useSelector(selectlanguage)
  const dispatch = useDispatch()
  useEffect(() => {
    SetContentFulData("busesData", "-fields.oradij").then(data => {
      dispatch(setbusesData({
        busesData: data
      }))
    })

    SetContentFulData("muzeumdata", "sys.createdAt").then(data => {
      dispatch(setmuzeumData({
        muzeumData: data
      }))
    })
  }, [dispatch])


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