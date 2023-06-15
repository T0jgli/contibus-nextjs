import { useState } from "react";
import { useSelector } from "react-redux";

import { MDBTableBody, MDBTable, MDBTableHead, MDBBtn, MDBBtnGroup } from "mdbreact";
import { Tooltip } from "@material-ui/core";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import TableChartIcon from "@material-ui/icons/TableChart";
import { Fade } from "react-awesome-reveal";

import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Spinner from "../GlobalComponents/Spinner";
import { AnimatePresence, motion } from "framer-motion";
import { tableAnimation, cardAnimation } from "../GlobalComponents/Initaltransition";

const Fslightboxes = dynamic(() => import("../GlobalComponents/Fslightboxes"));
const Carddeck = dynamic(() => import("./Carddeck"), {
    loading: () => <Spinner />,
});
const Datatable = dynamic(() => import("./Datatable"));

const Table = ({ tablazat, settablazat }) => {
    const { locale } = useRouter();
    const busesdata = useSelector((state) => state.app.busesData);

    const [imgtoggler, setimgtoggler] = useState({
        toggler: false,
        slide: 0,
    });
    let idd = 0;

    return (
        <>
            <Fade triggerOnce direction="down">
                <h3 className="text-center desctext my-4" id="buses-text">
                    {locale === "en" ? "Our current buses" : "Jelenlegi autóbuszaink"}
                </h3>
            </Fade>
            <Fade triggerOnce direction="up">
                <MDBBtnGroup className="my-3" id="buses-btngroup">
                    <MDBBtn
                        disabled={tablazat === undefined ? false : !tablazat}
                        color="elegant"
                        aria-label="Kártyákra váltás"
                        style={{ borderRadius: "10px 0 0 10px", color: "white", marginRight: "0" }}
                        onClick={() => {
                            settablazat(!tablazat);
                            localStorage.removeItem("defaultBusView");
                        }}
                    >
                        <Tooltip title={locale === "en" ? "Cards" : "Kártyák"}>
                            <ViewAgendaIcon fontSize="small" />
                        </Tooltip>
                    </MDBBtn>
                    <MDBBtn
                        disabled={tablazat === undefined ? false : tablazat}
                        color="elegant"
                        aria-label="Táblázatra váltás"
                        style={{ borderRadius: "0 10px 10px 0", color: "white" }}
                        onClick={() => {
                            settablazat(!tablazat);
                            localStorage.setItem("defaultBusView", "table");
                        }}
                    >
                        <Tooltip title={locale === "en" ? "Table" : "Táblázat"}>
                            <TableChartIcon fontSize="small" />
                        </Tooltip>
                    </MDBBtn>
                </MDBBtnGroup>
            </Fade>

            <AnimatePresence exitBeforeEnter>
                {!tablazat ? (
                    <motion.section id="buses-cards" initial="initial" animate="animate" variants={tableAnimation} exit="exit" key={"busesCards"}>
                        {busesdata?.map((item, index, array) => {
                            if (index % 3 === 0) {
                                idd++;
                                return (
                                    <Carddeck
                                        length={array.length}
                                        idd={idd}
                                        item={item}
                                        nextnextitem={array[index + 2]}
                                        nextitem={array[index + 1]}
                                        what={"Table"}
                                        key={index}
                                    />
                                );
                            } else {
                                return null;
                            }
                        })}
                    </motion.section>
                ) : null}

                {tablazat && (
                    <motion.section id="buses-table" initial="initial" animate="animate" variants={cardAnimation} exit="exit" key="busesTable">
                        <MDBTable striped hover responsive className="w-100 mt-4 busestable">
                            <MDBTableHead className="z-depth-1">
                                <tr className="text-center z-depth-1">
                                    <th>
                                        <span className="font-weight-bolder">{locale === "en" ? "Vehicles" : "Járműveink"}</span>
                                    </th>
                                    <th></th>
                                    <th className="pr-3 text-right">
                                        <span className="font-weight-bolder">{locale === "en" ? "Prices" : "Árak"}</span>
                                    </th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {busesdata?.map((item, index) => {
                                    return (
                                        <Datatable setimgtoggler={setimgtoggler} imgtoggler={imgtoggler} dataid={index + 1} data={item} key={index} />
                                    );
                                })}
                            </MDBTableBody>
                        </MDBTable>
                    </motion.section>
                )}
            </AnimatePresence>

            <Fslightboxes setimgtoggler={setimgtoggler} data={busesdata} imgtoggler={imgtoggler} />
        </>
    );
};

export default Table;
