import { useState } from 'react'
import axios from 'axios';
import db from "../../lib/firebase"
import firebase from "firebase/app"
import { setsnackbar } from '../../lib/redux/reducers'
import { useDispatch } from 'react-redux'

import {
    MDBCol, MDBModal, MDBModalBody, MDBBtn, MDBCard, MDBCardFooter, MDBCardHeader, MDBCardBody, MDBInput, MDBModalHeader
} from "mdbreact";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import ReactGA from 'react-ga'
import { useRouter } from 'next/router';

const initialState = {
    name: "",
    date: "",
    bus: "",
    desc: "",
    phone: "",
    email: "",
    comment: "",
    newsletterlost: false,
    file: null,
    loading: false
}

const Lostitems = ({ elveszett, setelveszett }) => {
    const { locale } = useRouter()
    const dispatch = useDispatch()

    const [state, setstate] = useState(initialState)
    const [accept, setaccept] = useState(false)
    const [accepterror, setaccepterror] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault();
        if (accept) {
            setstate({ ...state, loading: true })
            axios({
                method: "POST",
                url: "/api/lostitems",
                data: state
            }).then((response) => {
                db.collection("lostitemusers").add({
                    name: state.name,
                    phone: state.phone,
                    email: state.email,
                    date: state.date,
                    bus: state.bus,
                    desc: state.desc,
                    sent: response.status == 200 ? true : response.data.error,
                    comment: state.comment,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })

                if (state.newsletterlost) {
                    db.collection("newsletterusers").doc(state.email).set({
                        name: state.name,
                        phone: state.phone,
                        email: state.email,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    })
                }

                if (response.status == 200) {
                    setstate(initialState)
                    dispatch(setsnackbar({
                        snackbar: {
                            open: true,
                            type: "success",
                            hu: "Sikeresen elk??ldve! Munkat??rsunk hamarosan felveszi ??nnel a kapcsolatot.",
                            en: "Successfully sent! We will contact you shortly.",
                        }
                    }))
                    setelveszett(!elveszett)
                    ReactGA.pageview(window.location.pathname)
                    window.scrollTo(0, 0)
                }
                else {
                    console.log(response.data)
                    dispatch(setsnackbar({
                        snackbar: {
                            open: true,
                            type: "success",
                            hu: response.data.error,
                            en: response.data.error,
                        }
                    }))
                    setstate(initialState)
                    setelveszett(!elveszett)
                    ReactGA.pageview(window.location.pathname)
                    window.scrollTo(0, 0)
                }
            })

        } else {
            setaccepterror(true)
            dispatch(setsnackbar({
                snackbar: {
                    open: true,
                    type: "error",
                    hu: "El kell fogadnia az adatv??delmi szerz??d??st!",
                    en: "You need to accept the privacy policy!",
                }
            }))
        }
    }

    return (
        <>
            <MDBModal cascading className="rounded" fade modalStyle="warning" isOpen={elveszett} toggle={() => {
                setelveszett(!elveszett)
                ReactGA.pageview(window.location.pathname)
            }} size="lg">
                <MDBModalHeader className="rounded" titleClass="heading lead font-weight-bolder" toggle={() => {
                    setelveszett(!elveszett)
                    ReactGA.pageview(window.location.pathname)
                }}>
                    {locale === "en" ? ("Lost items") : ("Elvesztett t??rgyak")}
                </MDBModalHeader>
                <MDBModalBody className="p-0">
                    <MDBCard>
                        <MDBCardHeader className="text-small text-muted text-center">
                            {locale === "en" ? (
                                <span>
                                    Our office is not responsible for items forgotten on the bus.
                                    <br />
                                    However, we assure you that we will do our best to ensure that the item will be returned to you.
                                    <br />
                                    You can pick up the found items at our office at a pre-arranged time.
                                    <br />
                                    These objects are stored for 3 months.
                                </span>) : (
                                    <span>
                                        Az
                                        aut??buszon
                                        felejtett
                                        t??rgyak??rt irod??nk felel??ss??get nem v??llal.
                                        <br />
                            Biztos??tjuk arr??l azonban, hogy mindent megtesz??nk annak ??rdek??ben, hogy ha az aut??buszon felejtette
                            akkor visszaker??l ??nh??z.
                                        <br />
                            A megtal??lt t??rgyakat irod??nkban el??re egyeztetett id??pontban veheti ??t.
                                        <br />
                            A megtal??lt t??rgyakat 3 h??napig ??rizz??k.
                                    </span>)}

                        </MDBCardHeader>
                        <MDBCardBody>
                            <form onSubmit={handlesubmit} className="mx-2">
                                <div className="form-row my-2">
                                    <MDBCol lg="6">
                                        <MDBInput label={locale === "en" ? ("Name *") : ("Utas neve *")}
                                            icon="user" name="name" value={state.name} onChange={e => setstate({ ...state, name: e.target.value })} required />
                                    </MDBCol>
                                    <MDBCol lg="6">
                                        <MDBInput label={locale === "en" ? ("Date of travel *") : ("Utaz??s d??tuma *")}
                                            icon="calendar-week" name="date" value={state.date} onChange={e => setstate({ ...state, date: e.target.value })} required />
                                    </MDBCol>
                                </div>
                                <div className="form-row my-2">
                                    <MDBCol>
                                        <MDBInput label={locale === "en" ? ("Which bus did you travel on? *") : ("Melyik aut??busszal utazott? *")}
                                            value={state.bus} name="bus" onChange={e => setstate({ ...state, bus: e.target.value })} icon="bus" required />
                                    </MDBCol>
                                </div>
                                <div className="form-row my-2">
                                    <MDBCol>
                                        <MDBInput label=
                                            {locale === "en" ? ("Description of the lost item *") : ("Az elveszett t??rgy le??r??sa *")}
                                            value={state.desc} name="desc" onChange={e => setstate({ ...state, desc: e.target.value })} icon="briefcase" required />
                                    </MDBCol>
                                </div>
                                <div className="form-row my-2">
                                    <MDBCol lg="6">
                                        <MDBInput label={locale === "en" ? ("Phone number") : ("Telefonsz??m")}
                                            type="tel" name="phone" value={state.phone} onChange={e => setstate({ ...state, phone: e.target.value })} icon="phone-alt" />
                                    </MDBCol>
                                    <MDBCol lg="6">
                                        <MDBInput label={locale === "en" ? ("Email address *") : ("Email c??m *")}
                                            type="email" name="email" value={state.email} onChange={e => setstate({ ...state, email: e.target.value })} icon="envelope" required />
                                    </MDBCol>
                                </div>
                                <div className="form-row my-2">
                                    <MDBCol>
                                        <MDBInput label={locale === "en" ? ("Comment") : ("Egy??b k??zlend??")}
                                            type="textarea" name="comment" value={state.comment} onChange={e => setstate({ ...state, comment: e.target.value })} rows="4" icon="comment" />
                                    </MDBCol>
                                </div>
                                <div className="form-row my-2">
                                    <FormGroup className="px-md-3 px-2">
                                        <FormControlLabel
                                            control={
                                                <Checkbox color="primary" style={{ color: "black" }} checked={state.newsletterlost}
                                                    onChange={() => setstate({ ...state, newsletterlost: !state.newsletterlost })} />
                                            }
                                            label={locale === "en" ? ("Subscribe to newsletter") : ("Feliratkoz??s a h??rlev??lre")}
                                        />
                                    </FormGroup>
                                </div>
                                <div className="form-row my-2">
                                    <FormGroup className="px-md-3 px-2">
                                        <FormControlLabel
                                            control={
                                                <Checkbox color="primary" style={{ color: "black" }} checked={accept}
                                                    onChange={() => setaccept(!accept)} />
                                            }
                                            label={locale === "en" ? (
                                                <>I accept the <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacytext font-weight-bolder">
                                                    privacy policy</a>!
                                                        <ArrowLeftIcon className={accepterror ? ("visible") : ("invisible")} style={{ color: "red" }} />
                                                </>) : (
                                                    <>Elfogadom az <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacytext font-weight-bolder">
                                                        adatv??delmi t??j??koztat??t</a>!
                                                            <ArrowLeftIcon className={accepterror ? ("visible") : ("invisible")} style={{ color: "red" }} />
                                                    </>)}
                                        />
                                    </FormGroup>
                                </div>
                                <MDBBtn color="warning" type="submit" disabled={state.loading} className="float-center black-text roundedbtn mx-auto d-block mt-3 mb-3 font-weight-bolder">
                                    {state.loading ? (
                                        <div className="d-flex p-0 m-0 justify-content-center animated zoomIn">
                                            <div className="spinner-border p-0 m-0" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    ) : locale === "en" ? ("Send") : ("K??ld??s")}
                                </MDBBtn>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn color="warning" outline className="float-right roundedbtn closetext" onClick={() => {
                            setelveszett(!elveszett);
                            ReactGA.pageview(window.location.pathname)
                        }}>
                            {locale === "en" ? ("Close") : ("Bez??r??s")}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>
        </>
    )
}

export default Lostitems
