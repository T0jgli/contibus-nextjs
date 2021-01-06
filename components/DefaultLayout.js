import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setbusesData, setmuzeumData } from '../lib/AppSlice'

import Navbar from './GlobalComponents/Navbar'

import { AnimatePresence } from 'framer-motion';
import SetContentFulData from '../lib/SetContentFulData';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga'
import { Crawler } from "es6-crawler-detect"
import dynamic from 'next/dynamic';
import Spinner from "./GlobalComponents/Spinner"

const Footer = dynamic(() => import("./GlobalComponents/Footer"), { loading: () => <Spinner /> });
const Scrolltopbutton = dynamic(() => import("./GlobalComponents/Scrolltopbutton"), { loading: () => <Spinner /> });
const Cookie = dynamic(() => import("./GlobalComponents/Cookie"));
const Snackbars = dynamic(() => import("./GlobalComponents/Snackbars"));
const InitialTransition = dynamic(() => import("./GlobalComponents/Initaltransition"));

const CrawlerDetector = new Crawler()
const userAgentString = typeof window !== "undefined" && navigator.userAgent;

const DefaultLayout = ({ children }) => {
    const dispatch = useDispatch()
    const { pathname } = useRouter()

    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [pathname])

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
            {typeof window !== "undefined" && localStorage.getItem("InitalTransition") !== "false" && !CrawlerDetector.isCrawler(userAgentString) && (<InitialTransition />)}
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
