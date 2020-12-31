import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { selectlanguage, setbusesData, setlanguage, setmuzeumData } from '../lib/AppSlice'
import { useSelector } from 'react-redux'

import InitialTransition from './GlobalComponents/Initaltransition';
import Navbar from './GlobalComponents/Navbar'
import Snackbars from './GlobalComponents/Snackbars'

import Footer from './GlobalComponents/Footer'
import Scrolltopbutton from './GlobalComponents/Scrolltopbutton';
import Cookie from './GlobalComponents/Cookie';
import { AnimatePresence } from 'framer-motion';
import SetContentFulData from '../lib/SetContentFulData';

const DefaultLayout = ({ children }) => {
    const language = useSelector(selectlanguage)
    const dispatch = useDispatch()

    useEffect(() => {
        window.document.documentElement.lang = language
    }, [language])

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
        <>
            {/* {typeof window !== "undefined" && localStorage.getItem("InitalTransition") !== "false" && (<InitialTransition />)} */}
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                {children}
            </AnimatePresence>

            <Cookie />
            <Footer />
            <div className="d-none d-md-block">
                <Scrolltopbutton />
            </div>
            <Snackbars />
        </>
    )
}

export default DefaultLayout
