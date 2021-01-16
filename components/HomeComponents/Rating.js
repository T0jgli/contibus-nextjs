import { useEffect, useState } from 'react'
import db from '../../lib/firebase';
import publicIp from "public-ip";
import { useDispatch } from 'react-redux';
import { setsnackbar } from '../../lib/redux/reducers';
import firebase from "firebase/app"

import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBInput, MDBRow } from 'mdbreact';

import { Rating as RatingComp } from '@material-ui/lab';
import { IconButton, Popover, Tooltip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';

const Rating = () => {
    const dispatch = useDispatch()
    const { locale } = useRouter()

    const [value, setValue] = useState(0);
    const [loading, setloading] = useState(false);
    const [textareavalue, settextareavalue] = useState("");
    const [popover, setpopover] = useState({
        popover: false,
        anchorEl: null
    });

    const labels = {
        1: locale === "en" ? ("Very bad") : ('Nagyon rossz'),
        2: locale === "en" ? ("Bad") : ('Rossz'),
        3: locale === "en" ? ("Okay") : ('Átlagos'),
        4: locale === "en" ? ("Good") : ('Jó'),
        5: locale === "en" ? ("Perfect") : ('Tökéletes'),
    };

    useEffect(() => {
        if (typeof window !== "undefined")
            setValue(Number(localStorage.getItem("Feedback")) || 0)
    }, [])

    const SendFeedback = () => {
        setloading(true)
        publicIp.v4({
            fallbackUrls: ["https://ifconfig.co/ip"]
        }).then((ip) => {
            db.collection("feedbacks").where("ipaddress", "==", ip).get().then((datas) => {
                let exists = false
                console.log()
                datas.forEach(data => {
                    console.log(data)
                    if (data)
                        exists = true
                })
                if (exists) {
                    dispatch(setsnackbar({
                        snackbar: {
                            open: true,
                            type: "error",
                            hu: "Köszönjük, de Ön már küldött visszajelzést!",
                            en: "Thank you, but you have already sent a feedback!",
                        }
                    }))
                }
                else {
                    db.collection("feedbacks").add({
                        feedbackstar: value,
                        feedbacktext: labels[value],
                        details: textareavalue,
                        ipaddress: ip,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    }).then(() =>
                        dispatch(setsnackbar({
                            snackbar: {
                                open: true,
                                type: "success",
                                hu: "Köszönjük a visszajelzését!",
                                en: "Thank you for your feedback!",
                            }
                        }))
                    )

                }
            })

        }, (error) => {
            dispatch(setsnackbar({
                snackbar: {
                    open: true,
                    type: "error",
                    hu: error.message,
                    en: error.message,
                }
            }))
        }).then(() => {
            setloading(false)
            setpopover({ popover: false })
            settextareavalue("")
        })

    }

    return (
        <>
            <Fade triggerOnce>
                <MDBRow className="justify-content-center mx-auto pt-3 pb-4">
                    <h3>
                        {locale === "en" ? ("Rate Us") : ("Értékeljen minket")}
                    </h3>
                </MDBRow>
            </Fade>
            <Fade triggerOnce delay={200} direction="up">
                <MDBRow className="justify-content-center mx-auto mb-4">
                    <RatingComp
                        name="feedback"
                        value={value}
                        precision={1}
                        style={{ color: "#fb3" }}
                        onChange={(event, newValue) => {
                            if (newValue === null) {
                                localStorage.removeItem("Feedback")
                            }
                            else
                                localStorage.setItem("Feedback", newValue)
                            setValue(newValue);
                            setpopover({ popover: true, anchorEl: event.currentTarget })
                        }}
                        onChangeActive={(event, newHover) => {
                        }}
                        size="large"
                    />
                    {value > 0 && (
                        <Popover
                            open={popover.popover}
                            anchorEl={popover.anchorEl}
                            onClose={() => setpopover({ popover: false })}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <MDBCard className="">
                                <MDBCardHeader className="p-3">
                                    {labels[value]}
                                </MDBCardHeader>
                                <MDBCardBody className="p-3">
                                    <MDBInput type="textarea" label={locale === "en" ? ("Your opinion (optional)") : ("Vélemény (opcionális)")} rows="5" value={textareavalue}
                                        onChange={(e) => settextareavalue(e.target.value)} />
                                </MDBCardBody>
                                <MDBCardFooter className="p-0 justify-content-between d-flex">
                                    <MDBBtn disabled={loading} onClick={SendFeedback} color="warning" className="roundedbtn black-text ml-3 font-weight-bold" size="sm">
                                        {loading ? (
                                            <div className="d-flex p-0 m-0 justify-content-center animated zoomIn">
                                                <div className="spinner-border spinner-border-sm p-0 m-0" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                        ) : locale === "en" ? ("Send") : ("Küldés")}
                                    </MDBBtn>
                                    <Tooltip title={locale === "en" ? ("The feedback will not be sent.") : ("Az értékelés nem lesz elküldve.")}>
                                        <IconButton onClick={() => setpopover({ popover: false })}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Tooltip>
                                </MDBCardFooter>
                            </MDBCard>

                        </Popover>
                    )}

                </MDBRow>
            </Fade>


        </>
    )
}

export default Rating
