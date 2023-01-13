import { useState } from "react";

import { MDBBtn } from "mdbreact";
import UpdateIcon from "@material-ui/icons/Update";
import SpeedIcon from "@material-ui/icons/Speed";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { IconButton, Tooltip } from "@material-ui/core";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";
const Fslightboxes = dynamic(() => import("../GlobalComponents/Fslightboxes"));

const OneBusBody = ({ thisbus }) => {
    const router = useRouter();
    const [thispicture, setthispicture] = useState(0);
    const [lightbox, setlightbox] = useState({
        toggler: false,
        slide: 1,
    });

    return (
        <>
            {thisbus ? (
                <>
                    <Head>
                        <title>{thisbus?.fields.bus} - ContiBus</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <meta property="og:image" content={`https://${thisbus?.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`} />
                        <meta name="twitter:image" content={`https://${thisbus?.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`} />
                        <meta property="og:url" content={`https://contibus.hu/bus/${thisbus?.fields.id}`} />
                        <link rel="alternate" hrefLang="en" href={`https://contibus.hu/en/bus/${thisbus?.fields.id}`} />
                        <link rel="alternate" hrefLang="hu" href={`https://contibus.hu/bus/${thisbus?.fields.id}`} />
                    </Head>

                    <div className="onebus__container w-75 mx-auto my-5 pt-3">
                        <div className="row">
                            <div className="text-sm-right text-center col">
                                <Fade triggerOnce>
                                    <img
                                        alt={`${thisbus?.fields.bus} kép`}
                                        src={`https://${thisbus?.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`}
                                        style={{ cursor: "pointer", borderRadius: "1rem" }}
                                        onClick={() =>
                                            setlightbox({
                                                toggler: true,
                                                slide: thispicture,
                                            })
                                        }
                                        className="img img-rounded img-thumbnail buspict"
                                    />
                                </Fade>
                                <Fade triggerOnce>
                                    <div className="mt-2 otherpictures mb-5 mb-md-0">
                                        {thisbus?.fields.pictures.map((pict, i) => {
                                            if (i !== thispicture)
                                                return (
                                                    <img
                                                        alt={`${thisbus?.fields.bus} kép (${i + 1})`}
                                                        style={{ borderRadius: "1rem" }}
                                                        key={`${thisbus?.fields.bus} (${i + 1})`}
                                                        src={`https://${pict.fields.file.url}?&fm=webp&q=80`}
                                                        onClick={() => setthispicture(i)}
                                                        className="p-2"
                                                        width="100"
                                                    />
                                                );
                                            else return null;
                                        })}
                                    </div>
                                </Fade>
                            </div>

                            <div className="col">
                                <Fade triggerOnce>
                                    <div className="onebus__detailscontainer">
                                        <h2 className="text-center text-lg-left">{thisbus?.fields.bus}</h2>
                                        <div className="onebus__oradijcontainer d-flex align-items-center pb-2 mt-5">
                                            <UpdateIcon fontSize="large" />
                                            <div>
                                                <p className="grey-text m-0 pl-4">PER {router.locale === "en" ? "HOUR" : "ÓRA"}</p>
                                                <p className="grey-text h4 font-weight-bold pt-2 m-0 pl-4">
                                                    {thisbus?.fields.oradij.toLocaleString()} {router.locale === "en" ? "Ft / hour" : "Ft / óra"}
                                                </p>
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="onebus__kmdijcontainer d-flex align-items-center pt-2 mt-4">
                                            <SpeedIcon fontSize="large" />
                                            <div>
                                                <p className="grey-text m-0 pl-4">PER KM</p>
                                                <p className="grey-text h4 font-weight-bold pt-2 m-0 pl-4">
                                                    {thisbus?.fields.kmdij.toLocaleString()} Ft / km
                                                </p>
                                            </div>
                                        </div>

                                        <div className="onebus__kmdijcontainer d-flex align-items-center mt-5 pt-3">
                                            <EmojiPeopleIcon fontSize="large" />
                                            <div>
                                                <p className="grey-text m-0 pl-4">
                                                    {router.locale === "en" ? "NUMBER OF SEATS" : "SZÁLLÍTHATÓ SZEMÉLYEK"}
                                                </p>
                                                <h4 className="grey-text font-weight-bold pt-2 m-0 pl-4">
                                                    {thisbus?.fields.title.split(" ").slice(0, 3).join(" ")}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <Fade triggerOnce>
                            <div className="mt-5 pt-4 mx-auto flex-center row">
                                <div className="text-center col-lg-8">
                                    <p className="grey-text">{thisbus?.fields.desc}</p>
                                </div>
                            </div>
                            <div className="mx-auto mt-3 flex-center row">
                                <div className="text-center col-lg-8">
                                    <Tooltip title={router.locale === "en" ? "Seat positions" : "Ülésrend"}>
                                        <IconButton
                                            aria-label="seats"
                                            onClick={() => window.open(`https:${thisbus?.fields.seats.fields.file.url}`, "_blank")}
                                        >
                                            <AirlineSeatReclineNormalIcon />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="flex-center my-5 row" style={{ gap: "2rem" }}>
                                <div className="d-inline-block">
                                    <div
                                        onClick={() => {
                                            window.open(
                                                `https://www.facebook.com/sharer/sharer.php?u=${`https://contibus.hu/bus/${thisbus?.fields.id}`}`,
                                                "facebook-share-dialog",
                                                "width=800,height=600"
                                            );
                                        }}
                                        className="rounded font-weight-bolder shadow-md py-1 px-2 text-white flex w-full items-center"
                                        style={{ background: "#3b5998", cursor: "pointer" }}
                                    >
                                        <i className="fab fa-facebook-f" />
                                        <span className="pl-2 pr-1 ">Megosztás</span>
                                    </div>
                                </div>
                                <div className="inline-block">
                                    <div
                                        onClick={() => {
                                            window.open(
                                                `https://twitter.com/intent/tweet?url=${`https://contibus.hu/bus/${thisbus?.fields.id}`}`,
                                                "twitter-share-dialog",
                                                "width=800,height=600"
                                            );
                                        }}
                                        className="rounded font-weight-bolder shadow-md py-1 px-2 text-white flex w-full items-center"
                                        style={{ background: "#1DA1F2", cursor: "pointer" }}
                                    >
                                        <i className="fab fa-twitter" />

                                        <span className="pl-2 pr-1">Tweet</span>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        <div className="flex-center mt-5 pt-2 mx-auto row">
                            <Fade direction="up">
                                <MDBBtn
                                    color="warning"
                                    onClick={() => {
                                        router.push({
                                            pathname: "/offer",
                                            query: {
                                                selectedbus: thisbus?.fields.bus.replaceAll(/\s/g, "-"),
                                            },
                                        });
                                    }}
                                    className="my-1 black-text roundedbtn font-weight-bold"
                                >
                                    {router.locale === "en" ? "Get an offer" : "Ajánlatot kérek"}
                                </MDBBtn>
                            </Fade>
                        </div>
                    </div>
                    <Fslightboxes name={thisbus?.fields.bus} data={thisbus?.fields.pictures} imgtoggler={lightbox} setimgtoggler={setlightbox} />
                </>
            ) : (
                <h2 className="flex-center text-center my-5">A keresett autóbusz nem található!</h2>
            )}
        </>
    );
};

export default OneBusBody;
