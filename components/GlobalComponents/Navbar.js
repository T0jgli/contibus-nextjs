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

const Navbar = () => {
    const router = useRouter();

    const [calendaropen, setcalendaropen] = useState(false)

    const [langtoast, setlangtoast] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 767) {
            setIsOpen(false)
        }
    }, [router.pathname])
    console.log(router.locale)
    return (
        <>
            <MDBNavbar className="w-100 animated fadeInDown" fixed="top" color="elegant-color-dark" dark scrolling transparent expand="md">
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
                            {typeof window !== "undefined" && (
                                <div className="d-flex">
                                    <MDBNavItem>
                                        <MDBCol className="flex-center">
                                            <MDBRow className="">
                                                <div className="img-fluid pr-2">
                                                    <img width="30px" src="/img/hu.png" className={router.locale === "hu" ? ("flag activelanguage") : ("flag notactivelang")} id="huicon"
                                                        onClick={() => {
                                                            router.push(router.pathname, router.pathname, { locale: "hu" })
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
                                                            router.push(router.pathname, router.pathname, { locale: "en" })
                                                            setCookie("NEXT_LOCALE", "en", 365)
                                                            if (router.locale === "hu")
                                                                setlangtoast(true);
                                                        }} alt="language_enicon" />
                                                </div>

                                            </MDBRow>
                                        </MDBCol>
                                    </MDBNavItem>
                                </div>
                            )}


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
            </MDBNavbar>

            <Snackbar autoHideDuration={3000} open={langtoast} onClose={(event, reason) => { if (reason === "clickaway") { return; }; setlangtoast(false) }}>
                <SnackbarContent message={router.locale === "en" ? ("Language set") : ("Nyelv sikeresen beállítva")} />
            </Snackbar>
            <Calendar setcalendaropen={setcalendaropen} calendaropen={calendaropen} setisOpen={setIsOpen} />
        </>
    )
}

export default Navbar
