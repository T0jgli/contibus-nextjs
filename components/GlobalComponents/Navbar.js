import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCol, MDBRow
} from "mdbreact";
import { Snackbar, SnackbarContent } from '@material-ui/core';
import Link from 'next/link'

import Calendar from './Calendar';
import ReactGA from 'react-ga'
import { setCookie } from '../../lib/CookieHelper';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Navbar = () => {
    const router = useRouter();

    const [calendaropen, setcalendaropen] = useState(false)

    const [langtoast, setlangtoast] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 767) {
            setIsOpen(false)
        }
    }, [router.pathname, router.locale])
    return (
        <>
            {/* <MDBNavbar className="w-100 animated fadeInDown" fixed="top" color="elegant-color-dark" dark scrolling transparent expand="md">
                <div className="container px-0 py-lg-2">
                    <MDBNavbarBrand onClick={() => window.location.reload(false)} >
                        <MDBIcon icon="bus" />
                        <strong style={{ cursor: "pointer" }}> ContiBUS</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={() => setIsOpen(!isOpen)} />
                    <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active={router.pathname === "" ? (true) : router.pathname === "/" ? (true) : (false)}>
                                <Link href="/" passHref>
                                    <a data-test="nav-link" className="nav-link rounded">{router.locale === "en" ? ("Home") : ("Kezdőlap")}
                                    </a>
                                </Link>
                            </MDBNavItem>
                            <MDBNavItem active={router.pathname === "/offer" ? (true) : (false)}>
                                <Link href="/offer" passHref>
                                    <a data-test="nav-link" className="nav-link rounded">{router.locale === "en" ? ("Offer request") : ("Ajánlatkérés")}
                                    </a>
                                </Link>
                            </MDBNavItem>
                            <MDBNavItem active={router.pathname.includes("bus") ? (true) : (false)}>
                                <Link href="/buses" passHref>
                                    <a data-test="nav-link" className="nav-link rounded">{router.locale === "en" ? ("Our buses") : ("Autóbuszok")}
                                    </a>
                                </Link>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown size="lg">
                                    <MDBDropdownToggle className="rounded" nav caret>
                                        <span><MDBIcon icon="suitcase-rolling" className="px-lg-1 pr-1" />{router.locale === "en" ? (" Travels") : (" Utazásaink")} </span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic className="rounded z-depth-1 p-0">
                                        <MDBDropdownItem onClick={() => {
                                            setcalendaropen(!calendaropen);
                                            ReactGA.modalview('/calendar');
                                        }} className="p-4">{router.locale === "en" ? ("Calendar") : ("Naptár")} »
                                        </MDBDropdownItem>
                                        <MDBDropdownItem divider></MDBDropdownItem>
                                        <MDBDropdownItem href="https://www.facebook.com/Neoline-Kalandoz%C3%A1s-Utaz%C3%A1si-Iroda-184037444980315/events"
                                            target="_blank" className="p-4">{router.locale === "en" ? ("Facebook events") : ("Facebook eseményeink")} »</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>

                        <MDBNavbarNav className="nav-flex-icons" right>
                            <div className="d-flex">
                                <MDBNavItem>
                                    <MDBCol className="flex-center">
                                        <MDBRow className="">
                                            <div className="img-fluid pr-2">
                                                <img width="30px" src="/img/hu.png" className={router.locale === "hu" ? ("flag activelanguage") : ("flag notactivelang")} id="huicon"
                                                    onClick={() => {
                                                        if (router.pathname.includes("bus/")) {
                                                            router.push({
                                                                pathname: "/bus/[bus]",
                                                                query: {
                                                                    bus: window.location.pathname.split("/").slice(-1)[0]
                                                                }
                                                            }, "/bus/[bus]", { locale: "hu" })
                                                        }
                                                        else {
                                                            router.push(router.pathname, router.pathname, { locale: "hu" })
                                                        }
                                                        document.cookie = "NEXT_LOCALE= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
                                                        if (router.locale === "en")
                                                            setlangtoast(true);
                                                    }} alt="language_huicon" />
                                            </div>
                                        </MDBRow>
                                    </MDBCol>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBCol className="flex-center">
                                        <MDBRow className="">
                                            <div className="img-fluid pr-2">
                                                <img width="30px" src="/img/uk.png" className={router.locale === "en" ? ("flag activelanguage") : ("flag notactivelang")} id="engicon"
                                                    onClick={() => {
                                                        if (router.pathname.includes("bus/")) {
                                                            console.log(window.location.pathname.split("/").slice(-1)[0])
                                                            router.push({
                                                                pathname: "/bus/[bus]",
                                                                query: {
                                                                    bus: window.location.pathname.split("/").slice(-1)[0]
                                                                }
                                                            }, "/bus/[bus]", { locale: "en" })
                                                        }
                                                        else {
                                                            router.push(router.pathname, router.pathname, { locale: "en" })
                                                        }
                                                        setCookie("NEXT_LOCALE", "en", 365)
                                                        if (router.locale === "hu")
                                                            setlangtoast(true);
                                                    }} alt="language_enicon" />
                                            </div>

                                        </MDBRow>
                                    </MDBCol>
                                </MDBNavItem>
                            </div>


                            <MDBNavItem id="ticketbtn" onClick={() => setIsOpen(!isOpen)} className="rounded">
                                <a href="http://kalandozastravel.hu/cgi-bin/view2021" target="_blank" rel="noopener noreferrer"
                                    className="nav-link border border-light rounded text-center">
                                    <MDBIcon icon="calendar-check" className="pr-1" />
                                    {router.locale === "en" ? (" Tickets") : (" Jegyfoglalás")}
                                </a>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </div>
            </MDBNavbar> */}
            <nav>
                <div className="navbar__container">
                    <a className="navbar__logo">
                        <MDBIcon icon="bus" />
                        <span style={{ cursor: "pointer", paddingLeft: "5px" }}>ContiBUS
                        </span>

                    </a>
                    <div className="navbar__mobileicon" onClick={() => setIsOpen(true)}>
                        <MenuIcon fontSize="large" />
                    </div>
                    <ul className="navbar__menu">
                        <Link href="/" passHref>
                            <li>

                                <a className={`${router.pathname === "/" ? "active" : router.pathname === "" && "active"} navbar__link`}>
                                    Kezdőlap
                                </a>
                            </li>
                        </Link>
                        <Link href="/offer" passHref>
                            <li>
                                <a className={`${router.pathname === "/offer" && "active"} navbar__link`}>
                                    Ajánlatkérés
                                </a>
                            </li>
                        </Link>
                        <Link href="/buses" passHref>
                            <li>
                                <a className={`${router.pathname.includes("bus") && "active"} navbar__link`}>
                                    Autóbuszaink
                                </a>
                            </li>
                        </Link>

                        <li>
                            <a className="navbar__link">
                                Utazásaink <ArrowRightIcon />
                            </a>

                        </li>
                    </ul>
                    <div className="navbar__btn">
                        <a>
                            Jegyfoglalás
                    </a>
                    </div>
                </div>
                <div className="navbar__language">
                    <img width="30px" src="/img/hu.png" className={router.locale === "hu" ? ("flag activelanguage") : ("flag notactivelang")} id="huicon"
                        onClick={() => {
                            if (router.pathname.includes("bus/")) {
                                router.push({
                                    pathname: "/bus/[bus]",
                                    query: {
                                        bus: window.location.pathname.split("/").slice(-1)[0]
                                    }
                                }, "/bus/[bus]", { locale: "hu" })
                            }
                            else {
                                router.push(router.pathname, router.pathname, { locale: "hu" })
                            }
                            document.cookie = "NEXT_LOCALE= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
                            if (router.locale === "en")
                                setlangtoast(true);
                        }} alt="language_huicon" />
                    <img width="30px" src="/img/uk.png" className={router.locale === "en" ? ("flag ml-2 activelanguage") : ("flag ml-2 notactivelang")} id="engicon"
                        onClick={() => {
                            if (router.pathname.includes("bus/")) {
                                console.log(window.location.pathname.split("/").slice(-1)[0])
                                router.push({
                                    pathname: "/bus/[bus]",
                                    query: {
                                        bus: window.location.pathname.split("/").slice(-1)[0]
                                    }
                                }, "/bus/[bus]", { locale: "en" })
                            }
                            else {
                                router.push(router.pathname, router.pathname, { locale: "en" })
                            }
                            setCookie("NEXT_LOCALE", "en", 365)
                            if (router.locale === "hu")
                                setlangtoast(true);
                        }} alt="language_enicon" />
                </div>
            </nav>



            <aside className={`${isOpen ? "open" : "closed"}`}>
                <div className="sidebar__icon">
                    <CloseIcon fontSize="large" onClick={() => setIsOpen(!isOpen)} />
                </div>
                <div>
                    <ul>
                        <Link href="/" passHref>
                            <a className={`${router.pathname === "/" ? "active" : router.pathname === "" && "active"} sidebar__link`}>
                                Kezdőlap
                            </a>
                        </Link>
                        <Link href="/offer" passHref>
                            <a className={`${router.pathname === "/offer" && "active"} sidebar__link`}>
                                Ajánlatkérés
                            </a>
                        </Link>

                        <Link href="/buses" passHref>
                            <a className={`${router.pathname.includes("bus") && "active"} sidebar__link`}>
                                Autóbuszaink
                        </a>
                        </Link>
                        <a className="sidebar__link">
                            asdasd
                        </a>
                    </ul>
                    <div className="sidebar__language">
                        <img width="30px" src="/img/hu.png" className={router.locale === "hu" ? ("flag activelanguage") : ("flag notactivelang")} id="huicon"
                            onClick={() => {
                                if (router.pathname.includes("bus/")) {
                                    router.push({
                                        pathname: "/bus/[bus]",
                                        query: {
                                            bus: window.location.pathname.split("/").slice(-1)[0]
                                        }
                                    }, "/bus/[bus]", { locale: "hu" })
                                }
                                else {
                                    router.push(router.pathname, router.pathname, { locale: "hu" })
                                }
                                document.cookie = "NEXT_LOCALE= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
                                if (router.locale === "en")
                                    setlangtoast(true);
                            }} alt="language_huicon" />
                        <img width="30px" src="/img/uk.png" className={router.locale === "en" ? ("flag ml-2 activelanguage") : ("flag ml-2 notactivelang")} id="engicon"
                            onClick={() => {
                                if (router.pathname.includes("bus/")) {
                                    console.log(window.location.pathname.split("/").slice(-1)[0])
                                    router.push({
                                        pathname: "/bus/[bus]",
                                        query: {
                                            bus: window.location.pathname.split("/").slice(-1)[0]
                                        }
                                    }, "/bus/[bus]", { locale: "en" })
                                }
                                else {
                                    router.push(router.pathname, router.pathname, { locale: "en" })
                                }
                                setCookie("NEXT_LOCALE", "en", 365)
                                if (router.locale === "hu")
                                    setlangtoast(true);
                            }} alt="language_enicon" />
                    </div>

                    <div className="sidebar__btn">
                        <a>Jegyfoglalás</a>
                    </div>
                </div>
            </aside>

            <Snackbar autoHideDuration={3000} open={langtoast} onClose={(event, reason) => { if (reason === "clickaway") { return; }; setlangtoast(false) }}>
                <SnackbarContent message={router.locale === "en" ? ("Language set") : ("Nyelv sikeresen beállítva")} />
            </Snackbar>
            <Calendar setcalendaropen={setcalendaropen} calendaropen={calendaropen} setisOpen={setIsOpen} />
        </>
    )
}

export default Navbar