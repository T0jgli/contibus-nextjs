import { useState } from "react";

import { MDBBtn } from "mdbreact";
import dynamic from "next/dynamic";
import Spinner from "../GlobalComponents/Spinner";

const Muzeum = dynamic(() => import("./Muzeum"), { loading: () => <Spinner /> });
const Table = dynamic(() => import("./Table"), { loading: () => <Spinner /> });

import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";

const Busesbody = () => {
    const { locale } = useRouter();
    const [showMuzeum, setshowMuzeum] = useState(false);
    const [tablazat, settablazat] = useState(typeof window !== "undefined" && localStorage.getItem("defaultBusView") === "table" ? true : false);

    return (
        <>
            <img src="/img/3.jpg" className="img-fluid mx-auto d-none logo" width="220px" id="contibus-logo" alt="logo" />
            <div className="text-center py-4 main mb-5 busesothers">
                <div className="container">
                    <Fade triggerOnce>
                        <section>
                            <h3 className="py-3">{locale === "en" ? "Other informations:" : "Egyéb tudnivalók:"}</h3>
                            <p className="font-weight-bolder">
                                {locale === "en"
                                    ? "Domestic passenger transport is subject to 27% VAT, international passenger transport is subject to 0% VAT. A minimum of 250 km per day, a minimum of 4 hours must be paid for hourly billing."
                                    : "Belföldi személyszállítást 27% ÁFA terheli, nemzetközi személyszállítást 0%-os. Napi minimum 250 km, óradíjas elszámolásnál minimum 4 óra fizetendő."}
                            </p>
                            <p>
                                {locale === "en"
                                    ? "In addition to the indicated kilometer or hourly rate, VAT, tolls, crossing fees, city tickets, parking and a daily fee for drivers must be paid."
                                    : "A feltüntetett kilóméterdíjon, vagy óradíjon felül áfát, autópályadíjakat, átkelő díjakat, városbelépőket, parkolásokat, és a gépkocsivezetők részére napidíjat kell fizetni."}
                                {locale === "en"
                                    ? " The accommodation of the driver(s) is provided by the customer, the amount of the daily fee varies by road types."
                                    : " Gépkocsivezető(-k) szállásáról a megrendelő gondoskodik, a napidíj összege úttípusonként változik."}
                                {locale === "en"
                                    ? " The drivers should rest 9 hours or more."
                                    : " A gépkocsivezetők napi pihenőideje semmilyen körülmények között sem lehet kevesebb kilenc egymást követő óránál."}
                                {locale === "en"
                                    ? " We provide preliminary information on tolls, ferry costs and parking."
                                    : " Autópályadíjakról, kompköltségekről, parkolásról előzetes tájékoztatást adunk."}
                            </p>
                            <p className="font-weight-bolder m-0 p-0">
                                {locale === "en"
                                    ? "In case of regular order we provide a discount!"
                                    : "Rendszeres megrendelés esetén kedvezményt biztosítunk!"}
                            </p>
                            <p>
                                {locale === "en"
                                    ? "Orders can be placed in person at our office, by letter, fax, e-mail or phone."
                                    : "Megrendeléseket személyesen irodánkban, levélben, faxon, e-mailben fogadunk vagy ügyeleti telefonszámunkon várjuk hívását."}
                            </p>
                            <p>
                                {locale === "en"
                                    ? "For objects and values forgotten on the bus during the trips we do not take responsibility. We keep the found stuffs for 1 month."
                                    : "Az utazások alatt az autóbuszon felejtett tárgyakért, értékekért felelősséget nem tudunk vállalni. A talált tárgyakat irodánk 1 hónapig őrzi."}
                            </p>
                        </section>
                    </Fade>
                </div>
            </div>

            <div className="text-center my-5 mx-auto px-lg-0 " id="buses-container">
                <hr className="w-25 mt-5" />
                <Fade triggerOnce>
                    <MDBBtn color="dark" outline onClick={() => setshowMuzeum(!showMuzeum)} className="my-1 roundedbtn muzeumbtn">
                        {showMuzeum
                            ? locale === "en"
                                ? "« Current buses"
                                : "« Jelenlegi autóbuszaink"
                            : locale === "en"
                            ? "Autobus museum »"
                            : "Autóbusz múzeumunk »"}
                    </MDBBtn>
                </Fade>
                <hr className="w-25 mb-3" />
                {showMuzeum ? <Muzeum /> : <Table tablazat={tablazat} settablazat={settablazat} />}
            </div>
        </>
    );
};

export default Busesbody;
