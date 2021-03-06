import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import {
    MDBIcon
} from "mdbreact";
import { ClickAwayListener, Divider, MenuItem, MenuList, Paper, Popper, Slide, Snackbar, SnackbarContent } from '@material-ui/core';
import Link from 'next/link'

import ReactGA from 'react-ga'
import { setCookie } from '../../lib/CookieHelper';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import dynamic from 'next/dynamic';
const Calendar = dynamic(() => import("./Calendar"));

const menuitems = [
    {
        href: "/",
        title: {
            hu: "Kezdőlap",
            en: "Home"
        }
    },
    {
        href: "/offer",
        title: {
            hu: "Ajánlatkérés",
            en: "Offer request"
        }
    },
    {
        href: "/buses",
        title: {
            hu: "Autóbuszok",
            en: "Our Buses"
        }
    },

]

const Navbar = () => {
    const router = useRouter();
    const [calendaropen, setcalendaropen] = useState(false)
    const [langtoast, setlangtoast] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [navbarbg, setnavbarbg] = useState(false)
    const [menu, setmenu] = useState({
        open: false,
        ref: null,
        placement: null
    })

    useEffect(() => {
        if (typeof window !== undefined) {
            window.addEventListener("scroll", () => {
                if (window.scrollY >= 75) {
                    setnavbarbg(true)
                } else {
                    setnavbarbg(false)
                }

            })
        }
    }, [])

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsOpen(false)
        }
    }, [router.pathname, router.locale])
    return (
        <>
            <nav className={`${navbarbg ? "topnav" : ("")} animated fadeInDown`}>
                <div className="navbar__container">
                    <a className="navbar__logo" onClick={() => window.location.reload(false)}>
                        <MDBIcon icon="bus" />
                        <span>ContiBUS
                        </span>
                    </a>
                    <div className={`navbar__mobileicon`}
                        onClick={() => { setIsOpen(true) }}>
                        <MenuIcon className={`${isOpen ? ("navbar__mobileicon__open") : ("")}`} fontSize="large" />
                    </div>
                    <ul className="navbar__menu">
                        {menuitems.map(item => (
                            <Link key={item.href + "navbar"} href={item.href} passHref>
                                <li className={`${navbarbg ? "topnav__li" : ("")}`}>
                                    <a className={`${item.title.en === "Home" ? router.pathname === "/" ? "active" : router.pathname === "" ? "active" : ("")
                                        : item.title.en === "Offer request" ? router.pathname === "/offer" ? "active" : ("")
                                            : item.title.en === "Our Buses" ? router.pathname.includes("bus") ? "active" : ("") : ("")
                                        } navbar__link`}>
                                        {router.locale === "en" ? (item.title.en) : (item.title.hu)}
                                    </a>
                                </li>
                            </Link>
                        ))}
                        <li className={`${navbarbg ? "topnav__li" : ("")}`}>
                            <a
                                onClick={(e) => setmenu({
                                    ref: e.currentTarget,
                                    open: !menu.open,
                                    placement: "right-start"
                                })}
                                className={`${menu.open ? ("menuopened") : ("")} navbar__link`}
                            >
                                {router.locale === "en" ? ("Travels") : ("Utazásaink")} <ArrowRightIcon />
                            </a>
                        </li>
                    </ul>
                    <div className="navbar__btn">
                        <a href="http://kalandozastravel.hu/cgi-bin/view2021"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <MDBIcon icon="calendar-check" className="pr-1" />{router.locale === "en" ? ("Ticket Order") : ("Jegyfoglalás")}
                        </a>
                    </div>
                </div>
                <div className="navbar__language">
                    <img width="30px" src="/img/svgs/hu.svg" className={router.locale === "hu" ? ("flag activelanguage") : ("flag notactivelang")} id="huicon"
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
                            setCookie("NEXT_LOCALE", "hu", 365)
                            if (router.locale === "en")
                                setlangtoast(true);
                        }} alt="Váltás magyar nyelvre zászló" />
                    <img width="30px" src="/img/svgs/uk.svg" className={router.locale === "en" ? ("flag ml-2 activelanguage") : ("flag ml-2 notactivelang")} id="engicon"
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
                        }} alt="Váltás angol nyelvre zászló" />
                </div>
            </nav>



            <aside className={`${isOpen ? "open" : "closed"}`}>
                <div className="sidebar__icon">
                    <CloseIcon fontSize="large" onClick={() => { setIsOpen(!isOpen) }} />
                </div>
                <div>
                    <ul>
                        {menuitems.map(item => (
                            <Link key={item.href + "sidebar"} href={item.href} passHref>
                                <a className={`${item.title.en === "Home" ? router.pathname === "/" ? "active" : router.pathname === "" ? "active" : ("")
                                    : item.title.en === "Offer request" ? router.pathname === "/offer" ? "active" : ("")
                                        : item.title.en === "Our Buses" ? router.pathname.includes("bus") ? "active" : ("") : ("")
                                    } sidebar__link`}>
                                    {router.locale === "en" ? (item.title.en) : (item.title.hu)}
                                </a>
                            </Link>
                        ))}
                        <a className="sidebar__link"
                            className={`${menu.open ? ("menuopened") : ("")} sidebar__link`}
                            onClick={(e) => setmenu({
                                ref: e.currentTarget,
                                open: !menu.open,
                                placement: "bottom"
                            })}
                        >
                            {router.locale === "en" ? ("Travels") : ("Utazásaink")} <ArrowDropDownIcon />
                        </a>
                    </ul>
                    <div className="sidebar__language">
                        <img width="30px" src="/img/svgs/hu.svg" className={router.locale === "hu" ? ("flag activelanguage") : ("flag notactivelang")} id="huicon"
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
                                setCookie("NEXT_LOCALE", "hu", 365)
                                if (router.locale === "en")
                                    setlangtoast(true);
                            }} alt="Váltás magyar nyelvre zászló (mobil nézet)" />
                        <img width="30px" src="/img/svgs/uk.svg" className={router.locale === "en" ? ("flag ml-2 activelanguage") : ("flag ml-2 notactivelang")} id="engicon"
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
                            }} alt="Váltás angol nyelvre zászló (mobil nézet)" />
                    </div>

                    <div className="sidebar__btn">
                        <a href="http://kalandozastravel.hu/cgi-bin/view2021"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <MDBIcon icon="calendar-check" className="pr-1" />{router.locale === "en" ? ("Ticket Order") : ("Jegyfoglalás")}
                        </a>
                    </div>
                </div>
            </aside>

            <Popper className="mt-3" style={{ zIndex: "1000" }}
                open={menu.open} anchorEl={menu.ref} role={undefined} transition placement={menu.placement}>
                {({ TransitionProps }) => (
                    <Slide
                        timeout={500}
                        {...TransitionProps}
                    >
                        <Paper style={{ borderRadius: "20px", backgroundColor: "#f5f5f5" }}>
                            <ClickAwayListener onClickAway={() => setmenu({ ...menu, open: false })}>
                                <MenuList>
                                    <MenuItem
                                        onClick={() => {
                                            setcalendaropen(!calendaropen);
                                            setmenu({ ...menu, open: false })
                                            if (window.innerWidth < 767) {
                                                setIsOpen(false)
                                            }
                                            ReactGA.modalview('/calendar');
                                        }}
                                        className="font-weight-bolder"
                                    >
                                        {router.locale === "en" ? ("Calendar") : ("Naptár")} »
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem
                                        className="font-weight-bolder"

                                        onClick={() => {
                                            window.open("https://www.facebook.com/Neoline-Kalandoz%C3%A1s-Utaz%C3%A1si-Iroda-184037444980315/events", "_blank")
                                        }}
                                        rel="noopener noreferrer"
                                    >{router.locale === "en" ? ("Facebook events") : ("Facebook események")} »
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Slide>
                )}
            </Popper>


            <Snackbar autoHideDuration={3000} open={langtoast} onClose={(event, reason) => { if (reason === "clickaway") { return; }; setlangtoast(false) }}>
                <SnackbarContent className="rounded"
                    message={router.locale === "en" ? ("Language set") : ("Nyelv sikeresen beállítva")} />
            </Snackbar>
            <Calendar setcalendaropen={setcalendaropen} calendaropen={calendaropen} />
        </>
    )
}

export default Navbar