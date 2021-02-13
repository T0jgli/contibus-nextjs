import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setbusesData, setmuzeumData } from '../lib/redux/reducers'

import Navbar from './GlobalComponents/Navbar'

import { AnimatePresence } from 'framer-motion';
import SetContentFulData from '../lib/SetContentFulData';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga'
import dynamic from 'next/dynamic';
import Spinner from "./GlobalComponents/Spinner"

const Footer = dynamic(() => import("./GlobalComponents/Footer"), { loading: () => <Spinner /> });
const Scrolltopbutton = dynamic(() => import("./GlobalComponents/Scrolltopbutton"), { loading: () => <Spinner /> });
const Cookie = dynamic(() => import("./GlobalComponents/Cookie"));
const Snackbars = dynamic(() => import("./GlobalComponents/Snackbars"));

const DefaultLayout = ({ children }) => {
    const dispatch = useDispatch()
    const { pathname } = useRouter()

    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [pathname])

    const getCMSData = async () => {
        dispatch(setbusesData(
            await SetContentFulData("busesData", "-fields.oradij")
        ))
        dispatch(setmuzeumData(
            await SetContentFulData("muzeumdata", "sys.createdAt")
        ))
    }

    useEffect(() => {

        getCMSData()

    }, [dispatch])

    return (
        <>
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
