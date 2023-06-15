import { useState } from "react";
import axios from "axios";
import { setsnackbar } from "../../lib/redux/reducers";
import { useDispatch } from "react-redux";

import { MDBModal, MDBModalBody, MDBBtn, MDBCard, MDBCardFooter, MDBCardHeader, MDBCardBody, MDBInput, MDBModalHeader } from "mdbreact";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import ReactGA from "react-ga4";
import { useRouter } from "next/router";

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
    loading: false,
};

const Lostitems = ({ elveszett, setelveszett }) => {
    const { locale } = useRouter();
    const dispatch = useDispatch();

    const [state, setstate] = useState(initialState);
    const [accept, setaccept] = useState(false);
    const [accepterror, setaccepterror] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!accept) {
            dispatch(
                setsnackbar({
                    snackbar: {
                        open: true,
                        type: "error",
                        hu: "El kell fogadnia az adatvédelmi szerződést!",
                        en: "You need to accept the privacy policy!",
                    },
                })
            );
            setaccepterror(true);
            return;
        }
        setstate({ ...state, loading: true });
        axios({
            method: "POST",
            url: "/api/lostitems",
            data: state,
        }).then((response) => {
            setstate(initialState);
            setelveszett(!elveszett);
            ReactGA.send({ hitType: "pageview", page: window.location.pathname });
            window.scrollTo(0, 0);

            if (response.status == 200) {
                dispatch(
                    setsnackbar({
                        snackbar: {
                            open: true,
                            type: "success",
                            hu: "Sikeresen elküldve! Munkatársunk hamarosan felveszi Önnel a kapcsolatot.",
                            en: "Successfully sent! We will contact you shortly.",
                        },
                    })
                );
            } else {
                dispatch(
                    setsnackbar({
                        snackbar: {
                            open: true,
                            type: "success",
                            hu: response.data.error,
                            en: response.data.error,
                        },
                    })
                );
            }
        });
    };

    return (
        <>
            <MDBModal
                cascading
                className="rounded"
                fade
                modalStyle="warning"
                isOpen={elveszett}
                toggle={() => {
                    setelveszett(!elveszett);
                    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
                }}
                size="lg"
            >
                <MDBModalHeader
                    className="rounded"
                    titleClass="heading lead font-weight-bolder"
                    toggle={() => {
                        setelveszett(!elveszett);
                        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
                    }}
                >
                    {locale === "en" ? "Lost items" : "Elvesztett tárgyak"}
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
                                </span>
                            ) : (
                                <span>
                                    Az autóbuszon felejtett tárgyakért irodánk felelősséget nem vállal.
                                    <br />
                                    Biztosítjuk arról azonban, hogy mindent megteszünk annak érdekében, hogy ha az autóbuszon felejtette akkor
                                    visszakerül Önhöz.
                                    <br />
                                    A megtalált tárgyakat irodánkban előre egyeztetett időpontban veheti át.
                                    <br />A megtalált tárgyakat 3 hónapig őrizzük.
                                </span>
                            )}
                        </MDBCardHeader>
                        <MDBCardBody>
                            <form onSubmit={handlesubmit} className="mx-2">
                                <div className="form-row my-2">
                                    <div className="col-lg-6">
                                        <MDBInput
                                            label={locale === "en" ? "Name *" : "Utas neve *"}
                                            icon="user"
                                            name="name"
                                            value={state.name}
                                            onChange={(e) => setstate({ ...state, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <MDBInput
                                            label={locale === "en" ? "Date of travel *" : "Utazás dátuma *"}
                                            icon="calendar-week"
                                            name="date"
                                            value={state.date}
                                            onChange={(e) => setstate({ ...state, date: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-row my-2">
                                    <div className="col">
                                        <MDBInput
                                            label={locale === "en" ? "Which bus did you travel on? *" : "Melyik autóbusszal utazott? *"}
                                            value={state.bus}
                                            name="bus"
                                            onChange={(e) => setstate({ ...state, bus: e.target.value })}
                                            icon="bus"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-row my-2">
                                    <div className="col">
                                        <MDBInput
                                            label={locale === "en" ? "Description of the lost item *" : "Az elveszett tárgy leírása *"}
                                            value={state.desc}
                                            name="desc"
                                            onChange={(e) => setstate({ ...state, desc: e.target.value })}
                                            icon="briefcase"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-row my-2">
                                    <div className="col-lg-6">
                                        <MDBInput
                                            label={locale === "en" ? "Phone number" : "Telefonszám"}
                                            type="tel"
                                            name="phone"
                                            value={state.phone}
                                            onChange={(e) => setstate({ ...state, phone: e.target.value })}
                                            icon="phone-alt"
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <MDBInput
                                            label={locale === "en" ? "Email address *" : "Email cím *"}
                                            type="email"
                                            name="email"
                                            value={state.email}
                                            onChange={(e) => setstate({ ...state, email: e.target.value })}
                                            icon="envelope"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-row my-2">
                                    <div className="col">
                                        <MDBInput
                                            label={locale === "en" ? "Comment" : "Egyéb közlendő"}
                                            type="textarea"
                                            name="comment"
                                            value={state.comment}
                                            onChange={(e) => setstate({ ...state, comment: e.target.value })}
                                            rows="4"
                                            icon="comment"
                                        />
                                    </div>
                                </div>
                                <div className="form-row my-2">
                                    <FormGroup className="px-md-3 px-2">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    color="primary"
                                                    style={{ color: "black" }}
                                                    checked={state.newsletterlost}
                                                    onChange={() => setstate({ ...state, newsletterlost: !state.newsletterlost })}
                                                />
                                            }
                                            label={locale === "en" ? "Subscribe to newsletter" : "Feliratkozás a hírlevélre"}
                                        />
                                    </FormGroup>
                                </div>
                                <div className="form-row my-2">
                                    <FormGroup className="px-md-3 px-2">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    color="primary"
                                                    style={{ color: "black" }}
                                                    checked={accept}
                                                    onChange={() => setaccept(!accept)}
                                                />
                                            }
                                            label={
                                                locale === "en" ? (
                                                    <>
                                                        I accept the{" "}
                                                        <a
                                                            target="_blank"
                                                            href="/files/adatvedelmi_nyilatkozat.pdf"
                                                            className="privacytext font-weight-bolder"
                                                        >
                                                            privacy policy
                                                        </a>
                                                        !
                                                        <ArrowLeftIcon className={accepterror ? "visible" : "invisible"} style={{ color: "red" }} />
                                                    </>
                                                ) : (
                                                    <>
                                                        Elfogadom az{" "}
                                                        <a
                                                            target="_blank"
                                                            href="/files/adatvedelmi_nyilatkozat.pdf"
                                                            className="privacytext font-weight-bolder"
                                                        >
                                                            adatvédelmi tájékoztatót
                                                        </a>
                                                        !
                                                        <ArrowLeftIcon className={accepterror ? "visible" : "invisible"} style={{ color: "red" }} />
                                                    </>
                                                )
                                            }
                                        />
                                    </FormGroup>
                                </div>
                                <MDBBtn
                                    color="warning"
                                    type="submit"
                                    disabled={state.loading}
                                    className="float-center black-text roundedbtn mx-auto d-block mt-3 mb-3 font-weight-bolder"
                                >
                                    {state.loading ? (
                                        <div className="d-flex p-0 m-0 justify-content-center animated zoomIn">
                                            <div className="spinner-border p-0 m-0" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    ) : locale === "en" ? (
                                        "Send"
                                    ) : (
                                        "Küldés"
                                    )}
                                </MDBBtn>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBModalBody>
                <MDBCard className="rounded">
                    <MDBCardFooter>
                        <MDBBtn
                            color="warning"
                            outline
                            className="float-right roundedbtn closetext"
                            onClick={() => {
                                setelveszett(!elveszett);
                                ReactGA.send({ hitType: "pageview", page: window.location.pathname });
                            }}
                        >
                            {locale === "en" ? "Close" : "Bezárás"}
                        </MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
            </MDBModal>
        </>
    );
};

export default Lostitems;
