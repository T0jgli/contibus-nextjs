import { useEffect, useState } from 'react'
import axios from 'axios';
import db from "../../lib/firebase"
import firebase from "firebase/app"

import {
    MDBRow, MDBCol, MDBCardHeader, MDBCardBody, MDBBtn, MDBIcon
} from "mdbreact";
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

import { Checkbox, FormControlLabel, FormGroup, IconButton, Tooltip } from '@material-ui/core';
import { Fade } from "react-awesome-reveal";

import { setsnackbar } from '../../lib/redux/reducers'
import { useDispatch } from 'react-redux'
import ClearIcon from '@material-ui/icons/Clear';
import { useRouter } from 'next/router';

const initialstate = {
    name: "",
    phone: "",
    email: "",
    uticel: "",
    koltseg: "",
    indulas: "",
    erkezes: "",
    seat: "def",
    selectedbus: null,
    newsletter: false,
    comment: "",
    loading: false
}

const Formoffer = () => {
    const dispatch = useDispatch()
    const router = useRouter();

    const [state, setstate] = useState({
        ...initialstate, selectedbus: router.query?.selectedbus || null
    })
    const [accepterror, setaccepterror] = useState(false)
    const handlesubmit = (e) => {
        e.preventDefault();
        if (state.accept) {
            if (state.seat !== "def") {
                if (new Date(state.indulas).toLocaleDateString() < new Date(state.erkezes).toLocaleDateString()) {
                    setstate({ ...state, loading: true })
                    axios({
                        method: "POST",
                        url: "/api/offer",
                        data: state
                    }).then((response) => {
                        db.collection("formofferusers").add({
                            name: state.name,
                            phone: state.phone,
                            email: state.email,
                            uticel: state.uticel,
                            koltseg: state.koltseg,
                            indulas: new Date(state.indulas).toLocaleDateString(),
                            erkezes: new Date(state.erkezes).toLocaleDateString(),
                            selectedbus: state.selectedbus || "Nincs",
                            seat: state.seat,
                            comment: state.comment,
                            sent: response.status == 200 ? true : response.data.error,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp()
                        })

                        if (state.newsletter) {
                            db.collection("newsletterusers").doc(state.email).set({
                                name: state.name,
                                phone: state.phone,
                                email: state.email,
                                timestamp: firebase.firestore.FieldValue.serverTimestamp()
                            })
                        }

                        if (response.status == 200) {
                            setstate(initialstate)
                            window.scrollTo(0, 0)
                            dispatch(setsnackbar({
                                snackbar: {
                                    open: true,
                                    type: "success",
                                    hu: "Sikeresen elk??ldve! Munkat??rsunk hamarosan felveszi ??nnel a kapcsolatot.",
                                    en: "Successfully sent! We will contact you shortly.",
                                }
                            }))
                        }
                        else {
                            console.log(response.data)
                            window.scrollTo(0, 0)
                            dispatch(setsnackbar({
                                snackbar: {
                                    open: true,
                                    type: "error",
                                    hu: response.data.error,
                                    en: response.data.error,
                                }
                            }))
                        }
                    })
                }
                else {
                    dispatch(setsnackbar({
                        snackbar: {
                            open: true,
                            type: "error",
                            hu: "T??nyleg hamarabb akar vissza??rkezni, mint elindulni?",
                            en: "Do you really want to get back sooner than you leave?",
                        }
                    }))
                    setstate({ ...state, indulas: "", erkezes: "" })
                }
            }
            else
                dispatch(setsnackbar({
                    snackbar: {
                        open: true,
                        type: "error",
                        hu: "K??rj??k v??lasszon f??r??helyet!",
                        en: "Please select suitable seats!",
                    }
                }))
        }
        else {
            dispatch(setsnackbar({
                snackbar: {
                    open: true,
                    type: "error",
                    hu: "El kell fogadnia az adatv??delmi szerz??d??st!",
                    en: "You need to accept the privacy policy!",
                }
            }))
            setaccepterror(true)
        }
    }

    useEffect(() => {
        if (router.query.selectedbus)
            window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="">
                <img src="/img/3.jpg" className="img-fluid mx-auto d-none logo" width="220px" id="contibus-logo" alt="logo" />
                <MDBRow className="width-75 mx-auto pt-5" >
                    <MDBCol className="mb-4">
                        <div className="card rounded">
                            <MDBCardHeader id="offerheader" className="elegant-color-dark rounded white-text text-center py-4">
                                <h4 className="mb-0"><MDBIcon icon="caret-down" className="px-2" />{router.locale === "en" ? ("BUS OFFER REQUEST") : ("AUT??BUSZ AJ??NLAT K??R??S")}
                                    <MDBIcon className="px-2" icon="caret-down" />
                                </h4>
                            </MDBCardHeader>

                            <MDBCardBody className="rounded">
                                <form onSubmit={handlesubmit}>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <MDBCol lg="6" className="form-group">
                                                <label htmlFor="name">{router.locale === "en" ? ("Customer name *") : ("Megrendel?? neve *")}</label>
                                                <input type="text" name="name"
                                                    className="form-control" required value={state.name} onChange={e => setstate({ ...state, name: e.target.value })} />
                                            </MDBCol>
                                            <MDBCol lg="6" className="form-group">
                                                <label htmlFor="phone">{router.locale === "en" ? ("Phone number *") : ("Telefonsz??m *")}</label>
                                                <input type="num" name="phone"
                                                    className="form-control" value={state.phone} onChange={e => setstate({ ...state, phone: e.target.value })} required />
                                            </MDBCol>
                                        </div>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <MDBCol className="form-group">
                                                <label htmlFor="email">{router.locale === "en" ? ("Email address *") : ("Email c??m *")}</label>
                                                <input type="email" name="email"
                                                    className="form-control" value={state.email} onChange={e => setstate({ ...state, email: e.target.value })} required />
                                            </MDBCol>
                                        </div>
                                        <hr className="my-5 w-50 elegant-color-dark" />
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <MDBCol lg="6" className="form-group">
                                                <label htmlFor="uticel">{router.locale === "en" ? ("Destination *") : ("??tic??l *")}</label>
                                                <input type="text" name="uticel" value={state.uticel} onChange={e => setstate({ ...state, uticel: e.target.value })}
                                                    className="form-control" required />
                                            </MDBCol>
                                            <MDBCol lg="6" className="form-group">
                                                <label htmlFor="km">{router.locale === "en" ? ("Planned budget *") : ("Tervezett k??lts??gkeret *")}</label>
                                                <input type="text" name="koltseg" value={state.koltseg} onChange={e => setstate({ ...state, koltseg: e.target.value })}
                                                    className="form-control" required />
                                            </MDBCol>
                                        </div>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <MDBCol className="form-group">
                                                <label htmlFor="indulasdate">{router.locale === "en" ? ("Departure day *") : ("Indul??s napja *")}</label>
                                                <input type="date" name="indulasdate" min={new Date().toLocaleDateString().split(".").join("").split(" ").join("-")}
                                                    className="form-control" value={state.indulas} onChange={e => { setstate({ ...state, indulas: e.target.value }); }} required />
                                            </MDBCol>
                                            <MDBCol className="form-group">
                                                <label htmlFor="erkezesdate">{router.locale === "en" ? ("Date of arrival *") : ("??rkez??s napja *")}</label>
                                                <input type="date" name="erkezesdate" min={new Date().toLocaleDateString().split(".").join("").split(" ").join("-")}
                                                    className="form-control" value={state.erkezes} onChange={e => setstate({ ...state, erkezes: e.target.value })} required />
                                            </MDBCol>

                                        </div>
                                        <hr className="my-5 w-50 elegant-color-dark" />
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <MDBCol className="form-group">
                                                <label htmlFor="seatsselect">{router.locale === "en" ? ("Seats *") : ("F??r??hely *")}</label>
                                                <select className="form-control" name="ferohely"
                                                    required value={state.seat} onChange={e => setstate({ ...state, seat: e.target.value })}>
                                                    <option value="def">{router.locale === "en" ? ("Please select...") : ("K??rj??k v??lasszon...")}</option>
                                                    <option value="1-8">1-8 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="9-17">9-17 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="18-21">18-21 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="22-28">22-28 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="29-34">29-34 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="35-48">35-48 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="49-51">49-51 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="52-56">52-56 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="57-59">57-59 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="60-68">60-68 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="69-70">69-70 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="71-74">71-74 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="75-78">75-78 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="79-80">79-80 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                    <option value="81-83">81-83 {router.locale === "en" ? ("people") : ("f??")}</option>
                                                </select>
                                            </MDBCol>
                                        </div>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <MDBCol className="form-group">
                                                <label htmlFor="comment">{router.locale === "en" ? ("Short description *") : ("R??vid le??r??s (h??ny nap, honnan/hova, utaz??s jellege) *")}</label>
                                                <textarea className="form-control"
                                                    name="desc" value={state.comment} onChange={e => setstate({ ...state, comment: e.target.value })} rows="5" required></textarea>
                                                <small className="form-text text-muted text-center">
                                                    {router.locale === "en" ?
                                                        ("If you find our offer favorable, please order in email. Sending a request for a quote - and the response to it - is not considered an order!") :
                                                        ("Amennyiben aj??nlatunkat kedvez??nek tal??lja, ??r??sban k??rj??k megrendelni. Az aj??nlat k??r??s - ??s az arra kapott v??lasz - elk??ld??se nem tekinthet?? megrendel??snek!")}
                                                </small>
                                            </MDBCol>
                                        </div>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <FormGroup className="px-md-3 px-2">
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox color="primary" style={{ color: "black" }} checked={state.newsletter}
                                                            onChange={() => setstate({ ...state, newsletter: !state.newsletter })} />
                                                    }
                                                    label={router.locale === "en" ? ("Subscribe to newsletter") : ("Feliratkoz??s a h??rlev??lre")}
                                                />
                                            </FormGroup>
                                        </div>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <FormGroup className="px-md-3 px-2">
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox color="primary" style={{ color: "black" }} checked={state.accept}
                                                            onChange={() => { setstate({ ...state, accept: !state.accept }); if (accepterror) setaccepterror(false) }} />
                                                    }
                                                    label={router.locale === "en" ? (
                                                        <>I accept the <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacytext font-weight-bolder">
                                                            privacy policy</a>!
                                                    </>) : (
                                                            <>Elfogadom az <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacytext font-weight-bolder">
                                                                adatv??delmi t??j??koztat??t</a>!
                                                        </>)}
                                                />
                                                <ArrowDropUp className={accepterror ? ("visible pr-1") : ("invisible pr-1")} style={{ color: "red" }} />
                                            </FormGroup>
                                        </div>
                                    </Fade>
                                    {state.selectedbus && (
                                        <Fade triggerOnce>
                                            <h4 className="grey-text flex-center flex-column flex-md-row text-center mb-5 mx-auto">
                                                {router.locale === "en" ? ("Selected bus: ") : ("Kiv??lasztott busz: ")}
                                                <span className="font-weight-bolder pl-2 pt-2 pt-md-0">{state.selectedbus}</span>
                                                <Tooltip title={router.locale === "en" ? ("Remove") : ("Elt??vol??t??s")}>
                                                    <IconButton className="mt-md-0 mt-2"
                                                        onClick={() => { setstate({ ...state, selectedbus: null }) }}>
                                                        <ClearIcon />
                                                    </IconButton>
                                                </Tooltip>

                                            </h4>
                                        </Fade>

                                    )}
                                    <Fade direction="up">
                                        <MDBBtn color="dark" outline disabled={state.loading}
                                            style={{ minWidth: "200px" }}
                                            id="formsubmitbtn"
                                            type="submit" className="roundedbtn float-center mx-auto mt-3 mb-3 font-weight-bolder btn-block w-25">
                                            {state.loading ? (
                                                <div className="d-flex p-0 m-0 justify-content-center animated zoomIn">
                                                    <div className="spinner-border p-0 m-0" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                </div>
                                            ) : router.locale === "en" ? ("Send ??") : ("K??ld??s ??")}
                                        </MDBBtn>

                                    </Fade>
                                </form>
                            </MDBCardBody>
                        </div>

                    </MDBCol>
                </MDBRow>
            </div>

        </>
    )
}

export default Formoffer
