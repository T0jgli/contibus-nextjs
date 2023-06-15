import { useState } from "react";
import axios from "axios";

import { MDBCardHeader, MDBCardBody, MDBBtn, MDBIcon } from "mdbreact";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";

import { Checkbox, FormControlLabel, FormGroup, IconButton, Tooltip } from "@mui/material";
import { Fade } from "react-awesome-reveal";

import { setsnackbar } from "../../lib/redux/reducers";
import { useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { useRouter } from "next/router";

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
    file: null,
    accept: false,
    loading: false,
};

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

const Formoffer = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [state, setstate] = useState({
        ...initialstate,
        selectedbus: router.query?.selectedbus || null,
    });
    const [accepterror, setaccepterror] = useState(false);

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!state.accept) {
            dispatch(
                setsnackbar({
                    snackbar: {
                        open: true,
                        type: "error",
                        hu: "Kérjük, előbb fogadja el az adatvédelmi szerződést!",
                        en: "Please accept the privacy policy first!",
                    },
                })
            );
            setaccepterror(true);
            return;
        }

        if (state.seat === "def") {
            dispatch(
                setsnackbar({
                    snackbar: {
                        open: true,
                        type: "error",
                        hu: "Kérjük válasszon férőhelyet!",
                        en: "Please select suitable seats!",
                    },
                })
            );
            return;
        }

        if (new Date(state.indulas).toLocaleDateString() > new Date(state.erkezes).toLocaleDateString()) {
            dispatch(
                setsnackbar({
                    snackbar: {
                        open: true,
                        type: "error",
                        hu: "Tényleg hamarabb akar visszaérkezni, mint elindulni?",
                        en: "Do you really want to get back sooner than you leave?",
                    },
                })
            );
            setstate({ ...state, indulas: "", erkezes: "" });
            return;
        }

        setstate({ ...state, loading: true });

        axios({
            method: "POST",
            url: "/api/offer",
            data: state,
        }).then((response) => {
            if (response.status == 200) {
                setstate(initialstate);
                window.scrollTo(0, 0);
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
                window.scrollTo(0, 0);
                dispatch(
                    setsnackbar({
                        snackbar: {
                            open: true,
                            type: "error",
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
            <div className="">
                <img src="/img/3.jpg" className="img-fluid mx-auto d-none logo" width="220px" id="contibus-logo" alt="logo" />
                <div className="width-75 row mx-auto pt-5">
                    <div className="mb-4 col">
                        <div className="card rounded">
                            <MDBCardHeader id="offerheader" className="elegant-color-dark rounded white-text text-center py-4">
                                <h4 className="mb-0">
                                    <MDBIcon icon="caret-down" className="px-2" />
                                    {router.locale === "en" ? "BUS OFFER REQUEST" : "AUTÓBUSZ AJÁNLAT KÉRÉS"}
                                    <MDBIcon className="px-2" icon="caret-down" />
                                </h4>
                            </MDBCardHeader>

                            <MDBCardBody className="rounded">
                                <form onSubmit={handlesubmit}>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <div className="form-group position-relative col-lg-6">
                                                <label htmlFor="name">{router.locale === "en" ? "Customer name *" : "Megrendelő neve *"}</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    required
                                                    value={state.name}
                                                    aria-label="Név"
                                                    onChange={(e) => setstate({ ...state, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group position-relative col-lg-6">
                                                <label htmlFor="phone">{router.locale === "en" ? "Phone number *" : "Telefonszám *"}</label>
                                                <input
                                                    type="num"
                                                    name="phone"
                                                    aria-label="Telefon"
                                                    className="form-control"
                                                    value={state.phone}
                                                    onChange={(e) => setstate({ ...state, phone: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <div className="form-group position-relative col">
                                                <label htmlFor="email">{router.locale === "en" ? "Email address *" : "Email cím *"}</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    aria-label="Email"
                                                    className="form-control"
                                                    value={state.email}
                                                    onChange={(e) => setstate({ ...state, email: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <hr className="my-5 elegant-color-dark" style={{ opacity: "0.2" }} />
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <div lg="6" className="form-group position-relative col-lg-6">
                                                <label htmlFor="uticel">{router.locale === "en" ? "Destination *" : "Úticél *"}</label>
                                                <input
                                                    type="text"
                                                    name="uticel"
                                                    aria-label="Úticél"
                                                    value={state.uticel}
                                                    onChange={(e) => setstate({ ...state, uticel: e.target.value })}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                            <div lg="6" className="form-group position-relative col-lg-6">
                                                <label htmlFor="km">{router.locale === "en" ? "Planned budget *" : "Tervezett költségkeret *"}</label>
                                                <input
                                                    type="text"
                                                    name="koltseg"
                                                    aria-label="Költségkeret"
                                                    value={state.koltseg}
                                                    onChange={(e) => setstate({ ...state, koltseg: e.target.value })}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <div className="form-group position-relative col">
                                                <label htmlFor="indulasdate">{router.locale === "en" ? "Departure day *" : "Indulás napja *"}</label>
                                                <input
                                                    type="date"
                                                    name="indulasdate"
                                                    aria-label="Indulás napja"
                                                    min={new Date().toISOString().split("T")[0]}
                                                    className="form-control"
                                                    value={state.indulas}
                                                    onChange={(e) => {
                                                        setstate({ ...state, indulas: e.target.value });
                                                    }}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group position-relative col">
                                                <label htmlFor="erkezesdate">
                                                    {router.locale === "en" ? "Date of arrival *" : "Érkezés napja *"}
                                                </label>
                                                <input
                                                    type="date"
                                                    name="erkezesdate"
                                                    aria-label="Érkezés napja"
                                                    min={new Date().toISOString().split("T")[0]}
                                                    className="form-control"
                                                    value={state.erkezes}
                                                    onChange={(e) => setstate({ ...state, erkezes: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <hr className="my-5 elegant-color-dark" style={{ opacity: "0.2" }} />
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <div className="form-group position-relative col">
                                                <label htmlFor="seatsselect">{router.locale === "en" ? "Seats *" : "Férőhely *"}</label>
                                                <select
                                                    className="form-control"
                                                    name="ferohely"
                                                    aria-label="Férőhely"
                                                    required
                                                    value={state.seat}
                                                    onChange={(e) => setstate({ ...state, seat: e.target.value })}
                                                >
                                                    <option value="def">{router.locale === "en" ? "Please select..." : "Kérjük válasszon..."}</option>
                                                    <option value="1-8">1-8 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="9-17">9-17 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="18-21">18-21 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="22-28">22-28 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="29-34">29-34 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="35-48">35-48 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="49-51">49-51 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="52-56">52-56 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="57-59">57-59 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="60-68">60-68 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="69-70">69-70 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="71-74">71-74 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="75-78">75-78 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="79-80">79-80 {router.locale === "en" ? "people" : "fő"}</option>
                                                    <option value="81-83">81-83 {router.locale === "en" ? "people" : "fő"}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <div className="form-group position-relative col">
                                                <label htmlFor="comment">
                                                    {router.locale === "en"
                                                        ? "Short description *"
                                                        : "Rövid leírás (hány nap, honnan/hova, utazás jellege) *"}
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    name="desc"
                                                    aria-label="Leírás"
                                                    value={state.comment}
                                                    onChange={(e) => setstate({ ...state, comment: e.target.value })}
                                                    rows="5"
                                                    required
                                                ></textarea>
                                                <small className="form-text text-muted text-center">
                                                    {router.locale === "en"
                                                        ? "If you find our offer favorable, please order in email. Sending a request for a quote - and the response to it - is not considered an order!"
                                                        : "Amennyiben ajánlatunkat kedvezőnek találja, írásban kérjük megrendelni. Az ajánlat kérés - és az arra kapott válasz - elküldése nem tekinthető megrendelésnek!"}
                                                </small>
                                            </div>
                                        </div>
                                    </Fade>

                                    {/*                                     <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <div className="form-group position-relative col">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="inputGroupFileAddon01">
                                                            {state.file ? (
                                                                <Tooltip title={router.locale === "en" ? "Remove" : "Eltávolítás"}>
                                                                    <ClearIcon
                                                                        onClick={() => {
                                                                            setstate({ ...state, file: null });
                                                                        }}
                                                                        style={{ cursor: "pointer" }}
                                                                    />
                                                                </Tooltip>
                                                            ) : (
                                                                <MDBIcon icon="folder" />
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div className="custom-file">
                                                        <input
                                                            type="file"
                                                            className="custom-file-input"
                                                            id="inputGroupFile01"
                                                            aria-label="Fájl"
                                                            aria-describedby="inputGroupFileAddon01"
                                                            name="file"
                                                            onChange={async (e) => {
                                                                if (e.target.files[0]) {
                                                                    if (e.target.files[0].size > 5242880) {
                                                                        dispatch(
                                                                            setsnackbar({
                                                                                snackbar: {
                                                                                    open: true,
                                                                                    type: "error",
                                                                                    hu: "A fájl túl nagy, maximális méret 5 MB.",
                                                                                    en: "The file is too big, maximum allowed size is 5 MB.",
                                                                                },
                                                                            })
                                                                        );
                                                                        return;
                                                                    }

                                                                    try {
                                                                        const base64file = await getBase64(e.target.files[0]);
                                                                        setstate({ ...state, file: base64file, filename: e.target.files[0].name });
                                                                    } catch (error) {
                                                                        console.log(error);
                                                                    }
                                                                }
                                                            }}
                                                        />
                                                        <label
                                                            className="custom-file-label"
                                                            htmlFor="inputGroupFile01"
                                                            data-browse={router.locale === "en" ? "Browse" : "Tallózás"}
                                                        >
                                                            {state.file ? state.filename : router.locale === "en" ? "Choose file" : "Fájl csatolása"}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
 */}
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <FormGroup className="px-md-3 px-2">
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            color="primary"
                                                            style={{ color: "black" }}
                                                            checked={state.newsletter}
                                                            onChange={() => setstate({ ...state, newsletter: !state.newsletter })}
                                                        />
                                                    }
                                                    label={router.locale === "en" ? "Subscribe to newsletter" : "Feliratkozás a hírlevélre"}
                                                />
                                            </FormGroup>
                                        </div>
                                    </Fade>
                                    <Fade triggerOnce>
                                        <div className="form-row my-4">
                                            <FormGroup className="px-md-3 px-2">
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            color="primary"
                                                            style={{ color: "black" }}
                                                            checked={state.accept}
                                                            onChange={() => {
                                                                setstate({ ...state, accept: !state.accept });
                                                                if (accepterror) setaccepterror(false);
                                                            }}
                                                        />
                                                    }
                                                    label={
                                                        router.locale === "en" ? (
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
                                                            </>
                                                        )
                                                    }
                                                />
                                                <ArrowDropUp className={accepterror ? "visible pr-1" : "invisible pr-1"} style={{ color: "red" }} />
                                            </FormGroup>
                                        </div>
                                    </Fade>
                                    {state.selectedbus && (
                                        <Fade triggerOnce>
                                            <h4 className="grey-text flex-center flex-column flex-md-row text-center mb-5 mx-auto">
                                                {router.locale === "en" ? "Selected bus: " : "Kiválasztott busz: "}
                                                <span className="font-weight-bolder pl-2 pt-2 pt-md-0">{state.selectedbus}</span>
                                                <Tooltip title={router.locale === "en" ? "Remove" : "Eltávolítás"}>
                                                    <IconButton
                                                        className="mt-md-0 mt-2"
                                                        onClick={() => {
                                                            setstate({ ...state, selectedbus: null });
                                                        }}
                                                    >
                                                        <ClearIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </h4>
                                        </Fade>
                                    )}
                                    <Fade direction="up">
                                        <MDBBtn
                                            color="dark"
                                            outline
                                            disabled={state.loading}
                                            style={{ minWidth: "200px" }}
                                            id="formsubmitbtn"
                                            type="submit"
                                            className="roundedbtn float-center mx-auto mt-3 mb-3 font-weight-bolder btn-block w-25"
                                        >
                                            {state.loading ? (
                                                <div className="d-flex p-0 m-0 justify-content-center animated zoomIn">
                                                    <div className="spinner-border p-0 m-0" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                </div>
                                            ) : router.locale === "en" ? (
                                                "Send »"
                                            ) : (
                                                "Küldés »"
                                            )}
                                        </MDBBtn>
                                    </Fade>
                                </form>
                            </MDBCardBody>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Formoffer;
