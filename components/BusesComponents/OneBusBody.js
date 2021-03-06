import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { MDBBtn, MDBCol, MDBRow } from 'mdbreact'
import UpdateIcon from '@material-ui/icons/Update';
import SpeedIcon from '@material-ui/icons/Speed';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { IconButton, Tooltip } from '@material-ui/core'
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import { Fade } from 'react-awesome-reveal'
import { useRouter } from 'next/router'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import EquipmentList from './EquipmentList';
import { getEquipmentList } from '../../lib/getEquipmentList';
const Fslightboxes = dynamic(() => import("../GlobalComponents/Fslightboxes"));


const OneBusBody = () => {
    const router = useRouter()
    const buses = useSelector(state => state.app.busesData)
    const thisbus = buses.find(bus => bus.fields.id === router.query.bus)
    const [notfound, setnotfound] = useState(false)
    const [thispicture, setthispicture] = useState(0)
    const [lightbox, setlightbox] = useState({
        toggler: false,
        slide: 1
    })

    useEffect(() => {
        if (!thisbus && buses.length > 0)
            setnotfound(true)
    }, [thisbus, buses])

    return (
        <>
            {thisbus ? (
                <>
                    <Head>
                        <title>{thisbus.fields.bus} - Contibus</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <meta property="og:image" content={`https://${thisbus.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`} />
                        <meta name="twitter:image" content={`https://${thisbus.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`} />
                        <meta property="og:url" content={`https://contibus.kvlk.hu/bus/${thisbus.fields.id}`} />
                        <link rel="alternate" hrefLang="en" href={`https://contibus.kvlk.hu/en/bus/${thisbus.fields.id}`} />
                        <link rel="alternate" hrefLang="hu" href={`https://contibus.kvlk.hu/bus/${thisbus.fields.id}`} />
                    </Head>

                    <div className="onebus__container w-75 mx-auto my-5 pt-3">
                        <MDBRow>
                            <MDBCol className="text-sm-right text-center">
                                <Fade triggerOnce>
                                    <img alt={`${thisbus.fields.bus} k??p`} src={`https://${thisbus.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`}
                                        style={{ cursor: "pointer", borderRadius: "1rem" }}
                                        onClick={() => setlightbox({
                                            toggler: true,
                                            slide: thispicture
                                        })}
                                        className="img img-rounded img-thumbnail buspict" />
                                </Fade>
                                <Fade triggerOnce>
                                    <div className="mt-2 otherpictures mb-5 mb-md-0">
                                        {thisbus.fields.pictures.map((pict, i) => {
                                            if (i !== thispicture)
                                                return (
                                                    <img alt={`${thisbus.fields.bus} k??p (${i + 1})`}
                                                        style={{ borderRadius: "1rem" }}
                                                        key={`${thisbus.fields.bus} (${i + 1})`}
                                                        src={`https://${pict.fields.file.url}?&fm=webp&q=80`} onClick={() => setthispicture(i)}
                                                        className="p-2" width="100" />
                                                )
                                            else return null
                                        })}
                                    </div>
                                </Fade>


                            </MDBCol>

                            <MDBCol>
                                <Fade delay={200} triggerOnce>
                                    <div className="onebus__detailscontainer">
                                        <h2 className="text-center text-lg-left">{thisbus.fields.bus}</h2>
                                        <div className="onebus__oradijcontainer d-flex align-items-center pb-2 mt-5">
                                            <UpdateIcon fontSize="large" />
                                            <div>
                                                <p className="grey-text m-0 pl-4">PER {router.locale === "en" ? ("HOUR") : ("??RA")}</p>
                                                <p className="grey-text h4 font-weight-bold pt-2 m-0 pl-4">
                                                    {thisbus.fields.oradij.toLocaleString()} {" "} {router.locale === "en" ? ("Ft / hour") : ("Ft / ??ra")}
                                                </p>
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="onebus__kmdijcontainer d-flex align-items-center pt-2 mt-4">
                                            <SpeedIcon fontSize="large" />
                                            <div>
                                                <p className="grey-text m-0 pl-4">PER KM</p>
                                                <p className="grey-text h4 font-weight-bold pt-2 m-0 pl-4">
                                                    {thisbus.fields.kmdij.toLocaleString()} {" "}Ft / km
                                                </p>
                                            </div>
                                        </div>

                                        <div className="onebus__kmdijcontainer d-flex align-items-center mt-5 pt-3">
                                            <EmojiPeopleIcon fontSize="large" />
                                            <div>
                                                <p className="grey-text m-0 pl-4">{router.locale === "en" ? ("NUMBER OF SEATS") : ("SZ??LL??THAT?? SZEM??LYEK")}</p>
                                                <h4 className="grey-text font-weight-bold pt-2 m-0 pl-4">
                                                    {thisbus.fields.title.split(' ').slice(0, 3).join(" ")}
                                                </h4>

                                            </div>
                                        </div>
                                    </div>
                                </Fade>


                            </MDBCol>
                        </MDBRow>
                        {/*                         <EquipmentList desc={thisbus.fields.desc} />
 */}                        <Fade triggerOnce>
                            <MDBRow className="mt-5 pt-4 mx-auto flex-center">
                                <MDBCol lg="8" className="text-center">
                                    <p className="grey-text">{thisbus.fields.desc}</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mx-auto mt-3 flex-center">
                                <MDBCol lg="8" className="text-center">
                                    <Tooltip title={router.locale === "en" ? ("Seat positions") : ("??l??srend")}>
                                        <IconButton aria-label="seats" onClick={() => window.open(`https:${thisbus.fields.seats.fields.file.url}`, "_blank")}>
                                            <AirlineSeatReclineNormalIcon />
                                        </IconButton>
                                    </Tooltip>
                                </MDBCol>
                            </MDBRow>

                        </Fade>


                        <MDBRow className="flex-center mt-5 pt-2 mx-auto">
                            <Fade direction="up">
                                <MDBBtn color="warning" onClick={() => {
                                    router.push({
                                        pathname: "/offer",
                                        query: {
                                            selectedbus: thisbus.fields.bus.replaceAll(/\s/g, '-')
                                        }
                                    })
                                }} className="my-1 black-text roundedbtn font-weight-bold">
                                    {router.locale === "en" ? ("Order") : ("Megrendelem")}
                                </MDBBtn>

                            </Fade>
                        </MDBRow>

                    </div>
                    <Fslightboxes name={thisbus.fields.bus} data={thisbus.fields.pictures} imgtoggler={lightbox} setimgtoggler={setlightbox} />
                </>
            ) : notfound ? (
                <h2 className="flex-center text-center my-5">A keresett aut??busz nem tal??lhat??!</h2>
            ) : (
                <div className="flex-center my-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

            )}
        </>
    )
}

export default OneBusBody
